import React from 'react';


const TodoList = () => {

    const items = ['learn react', 'build app'];

    return (
        <div>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
            </ul>
        </div>
    )
}


export default TodoList
