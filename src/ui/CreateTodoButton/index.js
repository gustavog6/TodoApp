import './createTodoButton.css';
import { MdOutlineAddCircle } from 'react-icons/md';

function CreateTodoButton({ onClick }) {
  return <MdOutlineAddCircle className='CreateTodoButton' onClick={onClick} />;
}

export { CreateTodoButton };
