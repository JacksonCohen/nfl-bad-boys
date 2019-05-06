import React, { Component } from "react";

class RapSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimeDescription: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      crimeDescription: !this.state.crimeDescription
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.props.crimes &&
            this.props.crimes.map(crime => {
              return (
                <li key={crime.arrest_stats_id} onClick={this.handleClick}>
                  {crime.Category}
                  <div className={`crime-info${crime.arrest_stats_id}`} >{` - ${crime.Description}`}</div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default RapSheet;
