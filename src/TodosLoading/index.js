import "./todosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="IconLoading LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando, por favor espere.</p>
      <span className="Icon LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };
