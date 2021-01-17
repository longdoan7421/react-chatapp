import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="card-header">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search..."
          name=""
          className="form-control search"
          onChange={(e) => {
            props.setSearchText(e.target.value);
          }}
        />
        <div className="input-group-prepend">
          <span className="input-group-text search_btn">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
