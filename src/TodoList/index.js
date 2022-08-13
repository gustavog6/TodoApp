import './todoList.css';

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error) && props.searchedTodos.map(props.render || props.children)}

      <ul className='TodoList'>{props.children}</ul>
    </section>
  );
}

export { TodoList };
