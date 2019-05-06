import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RapSheet from './RapSheet';
import axios from 'axios';
import SupportDecision from './SupportDecision';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrestData: [],
      searchBar: false,
      searchValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  
  }

  handleSubmit(e) {
    e.preventDefault();

    let input = this.state.searchValue;
    this.setState({ searchBar: true });
    this.getArrests(input);
  }

  handleChange(e) {
    this.setState({ 
      searchValue: e.target.value 
    });
  }

  getArrests(player) {
    axios.get(`/arrests/${player}`)
      .then(({ data }) => this.setState({ arrestData: data }))
      .catch(err => console.error(err, 'Error fetching request data'));
  }

  render() {
    const { searchBar } = this.state;

    return (
      <>
        {/* Header */}
        {searchBar ? <h1 className="header">Here's the lowdown on </h1> : <h1 className="header">Ever wondered if you should support a player?</h1>}
        
        {/* Search Bar */}
        {searchBar ? null : <SearchBar searchValue={this.state.searchValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />}
        
        {/* Rap Sheet */}
        {searchBar ? <RapSheet crimes={this.state.arrestData} /> : null}

        {searchBar ? <SupportDecision crimes={this.state.arrestData} /> : null}
      </>
    );
  }
}

export default App;