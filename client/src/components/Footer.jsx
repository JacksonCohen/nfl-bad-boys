import React from "react";

const Footer = props => {
  const { searchBar, handleClick, clearInput } = props;

  return (
    <>
      {searchBar ? null : (
        <h3 className="footer" onClick={() => {handleClick(() => { clearInput() })}}>
          Check another player? Click here!
        </h3>
      )}
    </>
  );
};

export default Footer;