import React from "react";
import './search-box.styles.css';

export const Search = ({ placeholder = 'search monsters', setSearchField }) => (
  <input 
    className="search"
    type='search' 
    placeholder={placeholder}
    onChange={e => setSearchField(e.target.value)} />
)