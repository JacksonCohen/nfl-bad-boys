import React, { Fragment } from 'react';
import LandingHeader from './LandingHeader';
import SearchBar from './SearchBar';

const Landing = props => {
  const { searchBar, value, players, handleSubmit, onChange } = props;

  return (
    <Fragment>
      <LandingHeader />
      <SearchBar searchBar={searchBar} value={value} players={players} handleSubmit={handleSubmit} onChange={onChange} />
    </Fragment>
  );
}

export default Landing;