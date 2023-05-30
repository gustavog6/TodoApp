import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';
import { v4 as uuidv4 } from 'uuid';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V3', []); // cambiar por un objeto posteriormente

  const [searchValue, setSearchValue] = React.useState(''); //state created
  // const [openModal, setOpenModal] = React.useState(false);

  /* function to know how many TODO's are completed and the total of TODO's we got */
  const completedTodos = todos.filter(
    (todo) => !!todo.completed
  ).length; /* el tiene todo en vez de todos preguntar a Rosi */
  const totalTodos = todos.length;

  /* array to show only the TODOS's with coincidence, default shows all the list */
  let searchedTodos = [];

  /* explicación de esta rutina if
   * lo que se utiliza acá es un bucle que consulta cuando el input de busqueda se encuentra vacio,
   * de ser así procede a llenar el array de TODO's con el dafult para que se muestren todos los que
   * están, leugo de esto si no se encuentra vacío se procede a rellenar con los que coincidan con
   * la búsqueda que se está haciendo. Para filtrar correctamente se hace uso del método filter
   * y para que el argumento de ese método sea true se debe evaluar con una arrowfunction
   * dentro de ella creamos dos variables que convertiran lo que se busca y los todos en minúsculas
   * para luego usar el método includes(TEXT) y retornarlo.
   */

  // if (!searchValue >= 1) {
  //   /* another way: !searchValue */
  //   searchedTodos = todos;
  // } else {
  //   searchedTodos = todos.filter((todo) => {
  //     const todoText = todo.text.toLowerCase();
  //     return todoText.includes(searchValue);
  //   });
  // }

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const id = uuidv4();
    /* al no poder cambiar de una el estado del primer todo, se debe crear un nuevo array, duplicarlo y operarlo para poder setearlo nuevamente y así react pueda volver a renderizar. Por lo tanto:*/
    const newItem = [...todos];
    // newItem[todoIndex].completed = true;
    newItem.push({
      text,
      completed: false,
      id,
    });
    saveTodos(newItem);
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    /* al no poder cambiar de una el estado del primer todo, se debe crear un nuevo array, duplicarlo y operarlo para poder setearlo nuevamente y así react pueda volver a renderizar. Por lo tanto:*/
    const newItem = [...todos];
    // newItem[todoIndex].completed = true;
    newItem[todoIndex].completed = !newItem[todoIndex].completed;
    saveTodos(newItem);
  };

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    /* al no poder cambiar de una el estado del primer todo, se debe crear un nuevo array, duplicarlo y operarlo para poder setearlo nuevamente y así react pueda volver a renderizar. Por lo tanto:*/
    const newItem = [...todos];
    // newItem[todoIndex].completed = true;
    newItem[todoIndex].text = newText;
    saveTodos(newItem);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    /* al no poder cambiar de una el estado del primer todo, se debe crear un nuevo array, duplicarlo y operarlo para poder setearlo nuevamente y así react pueda volver a renderizar. Por lo tanto:*/
    const newItem = [...todos];
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  const getTodo = (id) => {
    const todo = todos.findIndex((todo) => todo.id === id);
    return todos[todo];
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
    // openModal,
  };

  const stateUpdaters = {
    setSearchValue,
    completeTodo,
    editTodo,
    deleteTodo,
    addTodo,
    // setOpenModal,
    sincronizeTodos,
  };

  return { states, stateUpdaters };
}

export { useTodos };
