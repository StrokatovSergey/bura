import React from 'react';
import './SearchPanel.css';


const SearchPanel = () => {
    const SearchPanel = 'type here to search';
    return (
        <input 
        className="form-control search-input"
        type="text" 
        placeholder={SearchPanel} />
    )
} 

export default SearchPanel
