import React from 'react'
import './search-box.styles.css';

const SearchBox = ({placeholder, onSearchChange}) => {
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                className="search"
                onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox;