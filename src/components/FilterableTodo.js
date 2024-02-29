import React, { useState } from "react";

const FilterableTodo = ({ todos }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [filterText, setFilterText] = useState('');

    return (
        <div>
            <Filter
                isCompleted={isCompleted}
                filterText={filterText}
                onSetIsCompleted={setIsCompleted}
                onSetFilterText={setFilterText} />
            <Todo
                todos={todos}
                isCompleted={isCompleted}
                filterText={filterText}
            />
        </div>
    );
}

export default FilterableTodo;

const Filter = ({ isCompleted, filterText, onSetIsCompleted, onSetFilterText }) => {
    return (
        <div>
            <label for="searchbox">Search bar</label>
            <input type="text" placeholder="Search..." id="searchbox" value={filterText} onChange={(e) => onSetFilterText(e.target.value)} />
            <br />
            <label for='cmpletebox'>
                <input type="checkbox" checked={isCompleted} onChange={(e) => onSetIsCompleted(e.target.checked)} />
                {' '}only if are not completed {isCompleted}</label>

        </div>
    )
}

const Todo = ({ todos, isCompleted, filterText }) => {
    const row = [];

    const style={
        fontSize:'8px'
    }

    const style2={
        fontSize:'28px'
    }
    todos.forEach(todo => {
        if (todo.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (isCompleted && todo.completed) {
            return;
        }
        row.push(<div><h1>{todo.name} {todo.completed ? <sup style={style}>completed   <span style={style2}>🤣</span></sup> : ''}</h1></div>)
    });

    return row;
}

