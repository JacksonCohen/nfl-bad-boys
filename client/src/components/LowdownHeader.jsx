import React from 'react';

const LowdownHeader = props => {
  const { player } = props;

  return <h1 className="header" style={{top:0}}>Is {player} clean?</h1>;
}

export default LowdownHeader;