import React from 'react';

const SupportDecision = props => {
  return (
    <>
      {props.crimes.length ? <center className="verdict" style={{color:"red"}}>NO</center> : <center className="verdict" style={{color:"green"}}>YES</center>}
    </>
  );
}

export default SupportDecision;