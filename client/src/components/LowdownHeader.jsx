import React from 'react';

const LowdownHeader = ({ searchedPlayer }) => {
  const text = searchedPlayer
    ? `Is ${searchedPlayer} clean?`
    : 'Click back to search for a new player!';
  return (
    <h1 className='header' style={{ top: 0 }}>
      {text}
    </h1>
  );
};

export default LowdownHeader;
