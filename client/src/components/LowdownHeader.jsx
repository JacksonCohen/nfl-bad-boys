import React from "react";

const LowdownHeader = props => {
  const { searchedPlayer } = props;

  return <h1 className="header" style={{top:0}}>Is {searchedPlayer} clean?</h1>;
}

export default LowdownHeader;