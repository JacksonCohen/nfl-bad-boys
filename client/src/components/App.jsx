import React, { Component } from 'react';
import SupportDecision from './SupportDecision';
import SearchBar from './SearchBar';
import RapSheet from './RapSheet';
import Footer from './Footer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrestData: [],
      searchBar: true,
      searchValue: ''
    };

    this.getName = this.getName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  
  }

  handleSubmit(e) {
    e.preventDefault();

    let input = this.state.searchValue;
    this.setState({ 
      searchBar: !this.state.searchBar,
      searchValue: ''
    });
    this.getArrests(input);
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

  getArrests(player) {
    axios.get(`/arrests/${player}`)
      .then(({ data }) => this.setState({ arrestData: data }))
      .catch(err => console.error(err, 'Error fetching request data'));
  }

  getName() {
    let playerName = this.state.searchValue;
    let properName = '';
    let splitName = playerName.split(' ');

    for (let name of splitName) {
      properName += name.charAt(0).toUpperCase() + name.substring(1) + ' ';
    }

    return properName;
  }

  render() {
    const { searchBar, searchValue, arrestData } = this.state;

    return (
      <>
        {/* Header */}
        {searchBar ? <h1 className="header">Ever wondered if you should support a player?</h1> : <h1 className="header">Can you trust {this.getName(searchValue)}?</h1>}
        
        <SearchBar searchBar={searchBar} searchValue={searchValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        
        <SupportDecision searchBar={searchBar} crimes={arrestData} />

        <RapSheet searchBar={searchBar} crimes={arrestData} />

        <Footer searchBar={searchBar} handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;