import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import React from "react";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppIU() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, } =
    React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error}/>}
        {/* {loading && <TodosLoading/>} */}
        {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!loading && !searchedTodos.length && (<EmptyTodos/>)}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
}

export { AppIU };
