import React, { Component } from 'react';
import './SearchPanel.css';


class SearchPanel extends Component {

    inputSearch = (event) => {
        this.props.searchTask(event.target.value)
    }

    render(){
        const SearchPanel = 'type here to search';
        return (
            <input
                onChange={this.inputSearch}
                className="form-control search-input"
                type="text"
                placeholder={SearchPanel} />
        )
    }


    

}

export default SearchPanel
