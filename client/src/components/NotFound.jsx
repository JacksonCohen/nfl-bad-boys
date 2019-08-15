import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = props => (
  <Fragment>
    <h1 className="center-text">Looks like you took a wrong turn. Click Peyton to return.</h1>
    <Link to="/" style={{ textDecoration: "none" }}>
      <img className="center-image" src="https://i.imgur.com/Lhq220r.jpg" />
    </Link>
  </Fragment>
)

export default NotFound;