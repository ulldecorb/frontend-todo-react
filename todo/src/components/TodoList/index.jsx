import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';
import '../../style/todoList.css';

export const TodoList = function TodoList({
  todos, handleDeleteTask, handleToggleTodoCheck, handleUpdateTask
}) {
  return (
    <ul className="list__box">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          handleToggleTodoCheck={handleToggleTodoCheck}
          handleUpdateTask={handleUpdateTask}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleToggleTodoCheck: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired
};

export default TodoList;
