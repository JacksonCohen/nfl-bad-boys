import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Lowdown from './Lowdown';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      arrestData: [],
      searchBar: true,
      redirect: false,
      searchedPlayer: ''
    };

    this.onChange = this.onChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRedirect = this.updateRedirect.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  handleSubmit(e) {
    e.preventDefault();
    let { searchBar } = this.state;
    let input = document.getElementsByClassName('react-autosuggest__input')[0].value;

    this.getArrests(input, () => { 
      this.setState({ 
        searchBar: !searchBar,
        searchedPlayer: input,
        redirect: true
      }, () => {console.log(this.state)});
    });
  }

  handleClick(callback) {
    this.setState({
      searchBar: !this.state.searchBar,
      arrestData: []
    }, () => {callback()});
  }

  getArrests(player, callback) {
    axios.get(`/arrests/${player}`)
      .then(({ data }) => this.setState({ arrestData: data }, callback()))
      .catch(err => console.error(err, 'Error fetching request data'));
  }

  getPlayers() {
    axios.get('/players')
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

  clearInput() {
    this.setState({ value: '' });
  }

  updateRedirect() {
    this.setState({ redirect: false }, () => { return <Redirect to="/" />, console.log('made it') });
  }

  render() {
    const { searchBar, arrestData, searchedPlayer, players, value, redirect } = this.state;
    const landingProps = {
      value: value,
      players: players,
      redirect: redirect,
      searchBar: searchBar,
      searchBar: searchBar,
      onChange: this.onChange,
      handleSubmit: this.handleSubmit
    }
    const lowdownProps = {
      crimes: arrestData,
      searchBar: searchBar,
      searchedPlayer: searchedPlayer,
      clearInput: this.clearInput,
      handleClick: this.handleClick,
      updateRedirect: this.updateRedirect
    }
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={() => <Landing {...landingProps} />} />
          <Route path="/lowdown" render={() => <Lowdown {...lowdownProps} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;