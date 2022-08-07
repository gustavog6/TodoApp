import React from "react";
import "./todoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="todoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
