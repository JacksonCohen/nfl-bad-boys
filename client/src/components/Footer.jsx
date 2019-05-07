import React from 'react';

const Footer = props => {
  const { searchBar, handleClick } = props;

  return (
    <>
      {searchBar ? null : <h3 className="footer" onClick={handleClick}>Check another player? Click here!</h3>}
    </>
  );
}

export default Footer;