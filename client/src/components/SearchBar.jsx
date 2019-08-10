import React, { Component, Fragment } from "react";
import Autosuggest from "react-autosuggest";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: []
    };

    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const suggestions = inputLength === 0 ? [] : this.props.players.filter(
      player => player.toLowerCase().slice(0, inputLength) === inputValue).slice(0, 8);

    return suggestions;
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }
  
  getSuggestionValue(suggestion) { 
    return suggestion;
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion}</div>;
  } 

  render() {
    const { suggestions } = this.state;
    const { searchBar, handleSubmit, value, onChange } = this.props;
    const inputProps = {
      placeholder: "SEARCH FOR A PLAYER e.g. Kenny Britt",
      value,
      onChange: onChange
    };

    return (
      <Fragment>
        {searchBar ? (
          <form className="search-bar" onSubmit={handleSubmit}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
            />
          </form>
        ) : null}
      </Fragment>
    );
  }
}

export default SearchBar;