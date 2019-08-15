import React, { Fragment } from 'react';
import Footer from './Footer';
import Verdict from './Verdict';
import RapSheet from './RapSheet';
import LowdownHeader from './LowdownHeader';

const Lowdown = props => {
  const { crimes, searchedPlayer, handleClick } = props;

  return (
    <Fragment>
      <LowdownHeader searchedPlayer={searchedPlayer} />
      <Verdict crimes={crimes} searchedPlayer={searchedPlayer} />
      <RapSheet crimes={crimes} />
      <Footer handleClick={handleClick} />
    </Fragment>
  );
};

export default Lowdown;
