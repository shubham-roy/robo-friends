import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search pa2">
            <input type="search" placeholder="Search Robots" className="pa3 b--green bg-lightest-blue" onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;