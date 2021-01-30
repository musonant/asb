import React from 'react';
import './styles.scss';
import searchIcon from '../../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <div className="main-search-bar">
      <img src={searchIcon} alt="" />
      <input />
    </div>
  )
};

export default SearchBar;
