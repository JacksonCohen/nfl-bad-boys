import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Lowdown from './Lowdown';
import NotFound from './NotFound';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      arrestData: [],
      redirect: false,
      searchedPlayer: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  handleSubmit(e) {
    e.preventDefault();
    let input = document.getElementsByClassName('react-autosuggest__input')[0].value;

    if (input) {
      this.getArrests(input, () => {
        this.setState({
          searchedPlayer: input,
          redirect: true
        });
      });
    }
  }

  handleClick() {
    this.setState({
      arrestData: [],
      redirect: false,
      value: ''
    });
    return <Redirect to='/' />;
  }

  getArrests(player, callback) {
    axios
      .get(`/api/arrests/${player}`)
      .then(({ data }) => this.setState({ arrestData: data }, callback()))
      .catch(err => console.error(err, 'Error fetching request data'));
  }

  getPlayers() {
    axios
      .get('/api/players')
      .then(({ data: players }) => {
        let playerNames = players.map(player => player.name);
        return playerNames;
      })
      .then(players => {
        this.setState({
          players: players
        });
      })
      .catch(err => console.error(err, 'Error fetching player data'));
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  render() {
    const { arrestData, searchedPlayer, players, value, redirect } = this.state;
    const landingProps = {
      value: value,
      players: players,
      redirect: redirect,
      onChange: this.onChange,
      handleSubmit: this.handleSubmit
    };
    const lowdownProps = {
      crimes: arrestData,
      searchedPlayer: searchedPlayer,
      handleClick: this.handleClick
    };

    return (
      <Fragment>
        <Switch>
          <Route exact path='/' render={() => <Landing {...landingProps} />} />
          <Route path='/lowdown' render={() => <Lowdown {...lowdownProps} />} />
          {players
            ? players.map((player, index) => {
                return (
                  <Route
                    key={index}
                    path={`${player.split(' ').join('')}`}
                    render={() => <Lowdown {...lowdownProps} />}
                  />
                );
              })
            : null}
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
