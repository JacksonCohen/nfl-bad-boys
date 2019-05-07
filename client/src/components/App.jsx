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
      searchValue: '',
      searchedPlayer: ''
    };

    this.getName = this.getName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  handleSubmit(e) {
    e.preventDefault();

    let input = this.state.searchValue;

    this.getArrests(input, () => { 
      this.setState({ 
        searchBar: !this.state.searchBar,
        searchedPlayer: this.state.searchValue,
        searchValue: ''
      });
    });
  }

  handleChange(e) {
    this.setState({ 
      searchValue: e.target.value 
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
      .then(({ data }) => this.setState({ arrestData: data }, () => { callback() }))
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

  getName() {
    const playerName = this.state.searchedPlayer;
    const splitName = playerName.split(' ');
    let properName = '';

    for (let name of splitName) {
      properName += name.charAt(0).toUpperCase() + name.substring(1) + ' ';
    }
    return properName.slice(0, -1);
  }

  render() {
    const { searchBar, searchValue, arrestData, searchedPlayer, players } = this.state;

    return (
      <>
        <Header searchBar={searchBar} searchedPlayer={searchedPlayer} player={this.getName(searchedPlayer)} />
        
        <SearchBar searchBar={searchBar} searchValue={searchValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} players={players} />
        
        <Verdict searchBar={searchBar} crimes={arrestData} />

        <RapSheet searchBar={searchBar} crimes={arrestData} />

        <Footer searchBar={searchBar} handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;