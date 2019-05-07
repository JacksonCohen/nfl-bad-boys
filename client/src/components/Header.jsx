import React from 'react';

const Header = props => {
  const { searchBar, player } = props;

  return (
    <>
      {searchBar ? <h1 className="header">NFL Arrests</h1> : <h1 className="header">Is {player} clean?</h1>}
    </>
  );
}

export default Header;