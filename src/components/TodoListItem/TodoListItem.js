import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, onDeleted, whichTaskDoneFromItem,
     whichTaskImportantFromItem, itemDone, itemImportant })=> {

    
        let myClassNames = 'todo-list-item';

        if (itemDone) {
            myClassNames += ' done';
        }
        if (itemImportant) {
            myClassNames += ' important';
        }

        return (
            <span className="todo-list-item-label">
                <span
                    className={myClassNames}
                    onClick={whichTaskDoneFromItem}
                >
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={whichTaskImportantFromItem}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }

export default TodoListItem;
