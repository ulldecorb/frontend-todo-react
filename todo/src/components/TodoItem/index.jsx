import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';

export const TodoItem = function TodoItem({
  todo, handleDeleteTask, toggleTodoCheck, handleUpdateTask
}) {
  const { id, task, completed } = todo;

  const updateTaskRef = useRef();

  const handleCheckClick = () => {
    toggleTodoCheck(id);
  };

  const handleUpdateTaskClick = () => {
    handleUpdateTask(id, updateTaskRef.current.value);
    updateTaskRef.current.value = null;
  };

  const handleDeleteTaskClick = () => {
    handleDeleteTask(id);
  };

  return (
    <li>
      <input type="checkbox" name="completed" checked={completed} onChange={handleCheckClick} />
      {task}
      <input ref={updateTaskRef} placeholder={task} type="text" name={task} />
      <button type="button" onClick={() => handleUpdateTaskClick()}>UPDATE</button>
      <button type="button" onClick={() => handleDeleteTaskClick()}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    task: String,
    id: Number,
    completed: Boolean
  }).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  toggleTodoCheck: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired
};

export default TodoItem;
