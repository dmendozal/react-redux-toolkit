import { useGetTodoQuery, useGetTodosQuery } from './store/apis';
import { useState } from 'react';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Is loading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={previousTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
            {todo.title}
          </li>
        ))}
      </ul>
      <button>Next Todo</button> */}
    </>
  );
};
