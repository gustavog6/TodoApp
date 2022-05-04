import "./createTodoButton.css";
import { MdOutlineAddCircle } from "react-icons/md";

function CreateTodoButton({ openModal , setOpenModal }) {

  const onClickCreateTodoBotton = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    // <button 
    //   className="CreateTodoButton"
    //   onClick={onClickCreateTodoBotton}
    // >
    // +
    // </button>

    <MdOutlineAddCircle
      className="CreateTodoButton"
      onClick={onClickCreateTodoBotton}
    />
    );
}

export { CreateTodoButton };
