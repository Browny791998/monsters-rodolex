import React from "react";
import './search-box.style.css';

export const SearchBox = ({placeholder,handelChange})=>(
  <input type="search"
  className="search"
  placeholder={placeholder} onChange={handelChange}></input>
);