import React, { Component } from "react";

class RapSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimeDescription: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.monitorCrimes(this.props.crimes);
  }

  handleClick(crime) {
    this.setState({
      [crime]: !this.state.crime
    });
  }

  monitorCrimes(crimes) {
    for (let crime of crimes) {
      this.setState({
        [crime.arrest_stats_id]: false
      });
    }
  }

  render() {
    const { searchBar, crimes } = this.props;
    
    return (
      <>
        {searchBar ? null : (
          <ul>
            {crimes &&
              crimes.map((crime, i) => {
                return (
                  <li
                    className={`crime-info`}
                    key={crime.arrest_stats_id}
                    onClick={() => this.handleClick(crime.arrest_stats_id)}
                  >
                    {crime.Category}
                    {this.state[crime.arrest_stats_id] ? (
                      <div className={`crime-info${i}`}>{` - ${
                        crime.Description
                      }`}</div>
                    ) : null}
                  </li>
                );
              })}
          </ul>
        )}
      </>
    );
  }
}

export default RapSheet;
