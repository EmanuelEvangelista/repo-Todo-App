import "./CreateTodoButton.css";
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const { 
    setOpenModal,
  } = React.useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(state => !state);
  };

  return (
    <div className="row">
      <div className="col buttonConteiner">
        <button 
        className="btn-flotante btn-block"
        onClick={handleClick}
        >+</button>
      </div>
    </div>
  );
}

export { CreateTodoButton };
