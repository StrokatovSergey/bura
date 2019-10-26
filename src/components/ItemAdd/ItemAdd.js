import React, { Component } from 'react';
import './ItemAdd.css';

class ItemAdd extends Component {
    state = {
        label: ''
    }
    onLabelChange = (event) =>{
        this.setState({
            label : event.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.whichTaskAdd(this.state.label)
        this.setState({
            label : ''
        })
    }
    render() {
        return (
            <form className="item-add-form"
                onSubmit={this.onSubmit}
                >
                <input type="text" className="form-control"
                onChange={this.onLabelChange}
                placeholder="what needs to be done"
                value={this.state.label}
                />
                <button className="btn">Add Task</button>
            </form>
        )
    }
}

export default ItemAdd;