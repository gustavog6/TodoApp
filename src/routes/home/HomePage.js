import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
// import { Modal } from '../../ui/Modal';
// import { TodoForm } from '../../ui/TodoForm';
import { TodosError } from '../../ui/TodosError';
// import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { TodoNotFound } from '../../ui/TodoSearch/TodoNotFound';

function HomePage() {
  const { states, stateUpdaters } = useTodos();
  const navigate = useNavigate();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    // openModal,
  } = states;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    // addTodo,
    // setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <ChangeAlert sincronize={sincronizeTodos} />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        // onLoading={() => <TodosLoading />}
        onLoading={() => <LoadingSpinner />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <TodoNotFound value={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      ></TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
      />
    </>
  );
}

export { HomePage };
