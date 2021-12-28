import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';
import '../../style/todoList.css';

export const TodoList = function TodoList({
  todos, handleDeleteTask, handleToggleTodoCheck, handleUpdateTask
}) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTask={handleDeleteTask}
            handleToggleTodoCheck={handleToggleTodoCheck}
            handleUpdateTask={handleUpdateTask}
            className="list__box"
          />
        ))}
      </ul>
      <span>
        { todos.filter((todo) => !todo.completed).length > 0
          ? `There are ${todos.filter((todo) => !todo.completed).length} tasks to do`
          : 'God Job!'}
      </span>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleToggleTodoCheck: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired
};

export default TodoList;
