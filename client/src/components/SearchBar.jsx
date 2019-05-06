import React from 'react';

const SearchBar = props => {
  return (
    <>
      <form className="search-bar" onSubmit={props.handleSubmit}>
        <input type="text" placeholder="SEARCH FOR A PLAYER e.g. Kenny Britt" value={props.searchValue} onChange={props.handleChange} />
      </form>
    </>
  );
}

export default SearchBar;