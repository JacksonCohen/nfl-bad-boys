import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  const { handleClick, clearInput, updateRedirect } = props;
  const footer = document.getElementsByClassName("footer")[0];

  if (footer) {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        updateRedirect(() => { footer.click(); });
      }
    })
  };

  return (
    <Fragment>
      <Link to="/">
        <h3 className="footer" onClick={() => { handleClick(() => { clearInput(); }); }}>
          Check another player? Click here!
        </h3>
      </Link>
    </Fragment>
  );
};

export default Footer;