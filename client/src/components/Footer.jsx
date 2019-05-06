import React from 'react';

const Footer = props => {
  return (
    <>
      {props.searchBar ? null : <h3 className="footer" onClick={props.handleClick}>Check another player? Click here!</h3>}
    </>
  );
}

export default Footer;