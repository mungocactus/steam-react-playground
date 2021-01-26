import React, { useState } from 'react';

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const getSearchValue = (e) => {
    console.log(searchValue);
    setSearchValue(e.target.value);
  }

  const submitSearchValue = (e) => {
    e.preventDefault();
    console.log(searchValue);
    props.dinosaurs(searchValue);
  }

  console.log('in here');

  return (
    <form>
      <p>Search</p>
      <input
      type="text"
      id="search"
      value={searchValue}
      onChange={getSearchValue}
      />
      <button onClick={submitSearchValue} type='submit' value='SEARCH'>Search</button>
    </form>
  )
}

export default SearchBox
