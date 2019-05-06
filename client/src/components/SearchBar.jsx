import React from 'react';

const SearchBar = props => {
  return (
    <>
      {props.searchBar ? <form className="search-bar" onSubmit={props.handleSubmit}>
        <input className="input-bar" type="text" placeholder="SEARCH FOR A PLAYER e.g. Kenny Britt" value={props.searchValue} onChange={props.handleChange} />
      </form> : null}
    </>
  );
}

export default SearchBar;