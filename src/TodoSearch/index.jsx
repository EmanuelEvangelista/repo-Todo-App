import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';


function TodoSearch() {
    const {
        searchValue, 
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className='row'>
            <div className='col'>
        <input 
        placeholder="Burscar tarea" 
        className='TodoSearch' 
        value={searchValue}
        onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
        </div>
        </div>
    );
}

export {TodoSearch};