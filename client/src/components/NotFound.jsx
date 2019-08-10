import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = props => (
  <Fragment>
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1 className="center-text">Looks like you took a wrong turn. Click here to return.</h1>
    </Link>
    <img className="center-image" src="https://i.imgur.com/Lhq220r.jpg" />
  </Fragment>
)

export default NotFound;