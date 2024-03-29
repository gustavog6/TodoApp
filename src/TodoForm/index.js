import React from "react";

import "./todoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");


  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form"
      >
      <label
        className="form-title"
      >¡Escribe un TODO!
      </label>
      <textarea
        placeholder="pedir las hamburguesas para la cena"
        value={newTodoValue}
        onChange={onChange}
        className="form-textarea"
      />
      <div>
        <button
          type="submit"
          className="button submit-button"  
        >
          Agregar
        </button>

        <button
         type="button"
         onClick={onCancel}
         className="button cancel-button"  
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
