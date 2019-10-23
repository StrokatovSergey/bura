import React, { Component } from 'react';
import './ItemAdd.css';

class ItemAdd extends Component {
    render() {


        return (
            <div>
                <input type="text" />
                <button onClick={() => { this.props.whichTaskAdd('hello') }}>Add Task</button>
            </div>

        )
    }
}

export default ItemAdd;