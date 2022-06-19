import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoCounter.css";


function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return <h2 className="todoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>;
}

export { TodoCounter };
