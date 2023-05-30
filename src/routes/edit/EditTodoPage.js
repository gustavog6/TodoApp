import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

function EditTodoPage() {
  const { states, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;

  const { loading, getTodo } = states;
  const location = useLocation();

  const slug = useParams();

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo;
  } else if (loading) {
    // return <p>cargando...</p>;
    return <LoadingSpinner />;
  } else {
    todoText = getTodo(slug.id);
  }
  return (
    <TodoForm
      loading={loading}
      label={'¡Edita el TODO!'}
      defaultTodoText={todoText.text}
      submitText={'Editar'}
      submitEvent={(newText) => editTodo(slug.id, newText)}
    />
  );
}

export { EditTodoPage };
