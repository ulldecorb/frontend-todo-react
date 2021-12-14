import React from 'react';
import PropTypes from 'prop-types';

export const TodoList = function TodoList({ todos }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.completed}
            {todo.task}
          </li>
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired
};

export default TodoList;
