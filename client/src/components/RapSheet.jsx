import React, { Component, Fragment } from "react";

class RapSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.monitorCrimes(this.props.crimes);
  }

  handleClick(crime) {
    this.setState({
      [crime]: !this.state[crime]
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
      <Fragment>
        {searchBar ? null : (
          <ol className="numbers">
            {crimes &&
              crimes.map((crime, i) => {
                return (
                  <li
                    className="crime-info"
                    key={crime.arrest_stats_id}
                    onClick={() => this.handleClick(crime.arrest_stats_id)}
                  >
                    {crime.Category}
                    {this.state[crime.arrest_stats_id] ? (
                      <div className={`crime-info${i}`}>
                        {` - ${crime.Description}`}
                      </div>
                    ) : null}
                  </li>
                );
              })}
          </ol>
        )}
      </Fragment>
    );
  }
}

export default RapSheet;