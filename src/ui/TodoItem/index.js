import './todoItem.css';

import { HiOutlineCheck, HiX, HiPencil } from 'react-icons/hi';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <HiOutlineCheck
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <HiX className='Icon Icon-delete' onClick={props.onDelete} />

      <HiPencil className='Icon Icon-edit' onClick={props.onEdit} />
    </li>
  );
}

export { TodoItem };
