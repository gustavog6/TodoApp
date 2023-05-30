import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage() {
  const { states, stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  const { loading } = states;

  return (
    <TodoForm
      loading={loading}
      label={'¡Añade un TODO!'}
      submitText={'Agregar'}
      submitEvent={(Text) => addTodo(Text)}
    />
  );
}

export { NewTodoPage };
