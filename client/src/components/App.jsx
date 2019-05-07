import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RapSheet from './RapSheet';
import Verdict from './Verdict';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrestData: [],
      searchBar: true,
      searchedPlayer: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  handleSubmit(e) {
    e.preventDefault();
    let { searchBar } = this.state;
    let input = document.getElementsByClassName('react-autosuggest__input')[0].value

    this.getArrests(input, () => { 
      this.setState({ 
        searchBar: !searchBar,
        searchedPlayer: input
      });
    });
  }

  handleClick(callback) {
    this.setState({
      searchBar: !this.state.searchBar,
      arrestData: []
    }, () => { callback(); });
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

  render() {
    const { searchBar, arrestData, searchedPlayer, players } = this.state;

    return (
      <>
        <Header searchBar={searchBar} searchedPlayer={searchedPlayer} player={searchedPlayer} />
        
        <SearchBar searchBar={searchBar} handleSubmit={this.handleSubmit} players={players} />
        
        <Verdict searchBar={searchBar} crimes={arrestData} />

        <RapSheet searchBar={searchBar} crimes={arrestData} />

        <Footer searchBar={searchBar} handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;