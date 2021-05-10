import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="pa2">
                <input type="search" placeholder="Search Robots" className="pa3 b--green bg-lightest-blue" onChange={this.props.searchChange}></input>
            </div>
        );
    }
};

export default SearchBox;