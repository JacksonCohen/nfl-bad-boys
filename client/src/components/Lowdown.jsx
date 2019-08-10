import React, { Fragment } from 'react';
import Footer from './Footer';
import Verdict from './Verdict';
import RapSheet from './RapSheet';
import LowdownHeader from './LowdownHeader';

const Lowdown = props => {
  const { crimes, searchBar, searchedPlayer, clearInput, handleClick, updateRedirect } = props;

  return (
    <Fragment>
      <LowdownHeader searchedPlayer={searchedPlayer} />
      <Verdict crimes={crimes} searchBar={searchBar} />
      <RapSheet crimes={crimes} searchBar={searchBar} />
      <Footer searchBar={searchBar} clearInput={clearInput} handleClick={handleClick} updateRedirect={updateRedirect} />
    </Fragment>
  )
}

export default Lowdown;