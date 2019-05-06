import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    return (
      <>
        <h1>Ever wondered if you should support a player?</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="SEARCH FOR A PLAYER e.g. Kenny Britt" value={this.state.searchValue} onChange={this.handleChange} />
        </form>
      </>
    );
  }
}

export default App;