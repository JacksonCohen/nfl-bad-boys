import React, { Fragment } from "react";

const Verdict = props => {
  const { crimes } = props;

  return (
    <Fragment>
      {crimes.length ? <center className="verdict" style={{color:"red"}}>NO</center> : <center className="verdict" style={{color:"green"}}>YES</center>}
    </Fragment>
  );
}

export default Verdict;