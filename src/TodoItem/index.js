import "./todoItem.css";
import { MdRemoveCircle, MdCheckCircle } from "react-icons/md";
function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      
      <MdCheckCircle
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <MdRemoveCircle
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };