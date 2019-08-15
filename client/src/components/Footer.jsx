import React, { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ handleClick }) => {
  const element = useRef(null);

  useEffect(() => {
    document.addEventListener('keyup', event => {
      if (event.keyCode === 13 && element.current !== null) {
        element.current.click();
      }
    });

    return () => document.removeEventListener('keyup', () => {});
  }, []);

  return (
    <Fragment>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h3
          ref={element}
          className='footer'
          onClick={() => {
            handleClick();
          }}
        >
          Check another player? Click here!
        </h3>
      </Link>
    </Fragment>
  );
};

export default Footer;
