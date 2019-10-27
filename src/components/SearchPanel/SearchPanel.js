import React, { Component } from 'react';
import './SearchPanel.css';


class SearchPanel extends Component {
    searchInput = (event) =>{
        this.props.searchInput(event.target.value);
    }


    render(){
        const SearchPanel = 'type here to search';
        return (
            <input
                onChange={this.searchInput}
                className="form-control search-input"
                type="text"
                placeholder={SearchPanel} />
        )
    }


    

}

export default SearchPanel
