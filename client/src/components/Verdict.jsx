import React from 'react';

const SupportDecision = props => {
  const { searchBar, crimes } = props;

  return (
    <>
      {searchBar ? null : crimes.length ? <center className="verdict" style={{color:"red"}}>NO</center> : <center className="verdict" style={{color:"green"}}>YES</center>}
    </>
  );
}

export default SupportDecision;