import './TodoNotFound.css';

function TodoNotFound({ value }) {
  return (
    <div className='EmptyTodos-container'>
      <p className='primer-p'>¡Ups!</p>
      <p className='segundo-p'>No se ha encontrado resultado para: {value}</p>
    </div>
  );
}

export { TodoNotFound };
