import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem/index';

export const TodoList = function TodoList({ todos }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired
};

export default TodoList;
