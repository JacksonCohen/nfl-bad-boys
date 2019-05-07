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
    let input = document.getElementsByClassName('react-autosuggest__input react-autosuggest__input--focused')[0].value

    this.getArrests(input, () => { 
      this.setState({ 
        searchBar: !searchBar,
        searchedPlayer: input
      });
    });
  }

  handleClick() {
    this.setState({
      searchBar: !this.state.searchBar,
      arrestData: []
    });
  }

  getArrests(player, callback) {
    axios.get(`/arrests/${player}`)
      .then(({ data }) => this.setState({ arrestData: data }, callback()))
      .catch(err => console.error(err, 'Error fetching request data'));
  }

  getPlayers() {
    let playerNames = [];

    axios.get('/players')
      .then(({ data: players }) => {
        for (let player of players) {
          playerNames.push(`${player.FirstName} ${player.LastName}`);
        }
        this.setState({
          players: playerNames
        })
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