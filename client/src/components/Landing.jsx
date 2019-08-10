import React, { Fragment } from "react";
import LandingHeader from "./LandingHeader";
import SearchBar from "./SearchBar";

const Landing = props => {
  const { value, players, handleSubmit, onChange, redirect } = props;

  return (
    <Fragment>
      <LandingHeader />
      <SearchBar redirect={redirect} value={value} players={players} handleSubmit={handleSubmit} onChange={onChange} />
    </Fragment>
  );
}

export default Landing;