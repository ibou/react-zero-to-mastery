import React from 'react'
import './search-box.styles.css';

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                className="search"
                onChange={handleChange} />
        </div>
    )
}

export default SearchBox;