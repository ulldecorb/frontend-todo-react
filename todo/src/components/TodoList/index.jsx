import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';

export const TodoList = function TodoList({ todos, handleDeleteTask, toggleTodoCheck }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            handleDeleteTask={handleDeleteTask}
            toggleTodoCheck={toggleTodoCheck}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape([{}]).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  toggleTodoCheck: PropTypes.func.isRequired
};

export default TodoList;
