import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
        const {
            completedTodos,
            totalTodos,
        } = React.useContext(TodoContext);
    return (
        
        <div className=' row'>
            <div className='col-md-3'></div>
            <div className="col-md-6 counterConteiner">
                <h3>TASK by EMA</h3>
                <h1 id='textReplaced'>
                YOU HAVE COMPLETED <span>{completedTodos} </span>OF<span> {totalTodos}</span> TASKS
                </h1>
            </div>
            <div className='col-md-3'></div>
        </div>
        
    );
}

export {TodoCounter};