import React from "react";

const Footer = props => {
  const { searchBar, handleClick } = props;

  return (
    <>
      {searchBar ? null : (
        <h3 className="footer" onClick={() => { handleClick(() => {
              document.getElementsByClassName("react-autosuggest__input")[0].value = "";
            });
          }}
        >
          Check another player? Click here!
        </h3>
      )}
    </>
  );
};

export default Footer;