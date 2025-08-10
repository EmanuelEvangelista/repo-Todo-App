import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
    return (
        <div className="itemContainer row">
          <div className="col">
            <li className='todoItem'>
              <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
              />

            <p 
              className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
              >{props.text}</p>

              <DeleteIcon 
              onDelete={props.onDelete}
              />

            </li>
          </div>
        </div>
    );
  }

  export {TodoItem};