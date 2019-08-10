import React, { Fragment } from 'react';

const Verdict = props => {
  const { searchBar, crimes } = props;

  return (
    <Fragment>
      {searchBar ? null : crimes.length ? <center className="verdict" style={{color:"red"}}>NO</center> : <center className="verdict" style={{color:"green"}}>YES</center>}
    </Fragment>
  );
}

export default Verdict;