import React, { Fragment } from "react";

const Footer = props => {
  const { searchBar, handleClick, clearInput } = props;
  const footer = document.getElementsByClassName("footer")[0];

  if (footer) {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        footer.click();
      }
    })
  };

  return (
    <Fragment>
      {searchBar ? null : (
        <h3 className="footer" onClick={() => { handleClick(() => { clearInput() }) }}>
          Check another player? Click here!
        </h3>
      )}
    </Fragment>
  );
};

export default Footer;