import React from 'react';
import './todoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`todoCounter ${!!loading && 'todoCounter--loading'}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
