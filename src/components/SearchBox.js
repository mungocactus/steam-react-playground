import React, { useState } from 'react';
import Search from '../assets/icons/search.svg';

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
    <form className='search'>
      <div className='input-container'>
        <input
        type="text"
        id="search"
        placeholder={props.placeholderText}
        value={searchValue}
        onChange={getSearchValue}
        />
        <button className='search-button' onClick={submitSearchValue} type='submit' value='search'>
          <img src={Search} className='search-icon' alt=''/>
        </button>
      </div>
    </form>
  )
}

export default SearchBox
