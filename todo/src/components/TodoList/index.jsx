import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';

export const TodoList = function TodoList({ todos, handleDeleteTask }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map((todo) => (
          <li>
            <TodoItem data={todo} handleDeleteTask={handleDeleteTask} />
            {todo.task}

          </li>
        ))}
      </ul>
      <div>
        <input type="text" name="addtask" id="addtask" />
      </div>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired,
  handleDeleteTask: PropTypes.func.isRequired
};

export default TodoList;
