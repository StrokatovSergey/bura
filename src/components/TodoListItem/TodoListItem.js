import React, { Component } from 'react';

import './TodoListItem.css';

class TodoListItem extends Component {
    constructor() {
        super()
        this.state = {
            done: false,
            important: false
        }

        this.onLabelClick = () => {
            this.setState(({ done }) => {
                return {
                    done: !done
                }
            })
        }
        this.onMarkImportant = () => {
            this.setState((state) => {
                return {
                    important: !state.important
                }
            })
        }
    }

    render() {

        const { label, onDeleted, toggleImportantFromItem, toggleDoneFromItem } = this.props;
        // const onDeleted = this.props.onDeleted;
        // const label = this.props.label;


        const { done, important } = this.state;
        // const important = this.state.important;
        // const done = this.state.done;

        let myClassNames = 'todo-list-item';

        if (done) {
            myClassNames += ' done';
        }
        if (important) {
            myClassNames += ' important';
        }
        // const style = {
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };

        return (
            <span className="todo-list-item-label">
                <span
                    className={myClassNames}
                    onClick={toggleDoneFromItem}
                >
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={toggleImportantFromItem}
                    >
                        
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    // onClick={this.props.onDeleted}
                    onClick={onDeleted}


                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}


export default TodoListItem;
