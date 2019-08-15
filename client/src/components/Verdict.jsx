import React, { Fragment } from 'react';

const Verdict = ({ crimes, searchedPlayer }) => {
  const color = crimes.length ? 'red' : 'green';
  const text = crimes.length ? 'NO' : 'YES';

  return (
    <Fragment>
      <center className='verdict' style={{ color }}>
        {searchedPlayer ? text : null}
      </center>
    </Fragment>
  );
};

export default Verdict;
