import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';

export const TodoItem = function TodoItem({
  todo, handleDeleteTask, handleToggleTodoCheck, handleUpdateTask
}) {
  const { id, task, completed } = todo;

  const updateTaskRef = useRef();

  const handleToggleTodoCheckClick = () => {
    handleToggleTodoCheck(id);
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
      <input type="checkbox" data-testid="checkboxInput" name="completed" checked={completed} onChange={handleToggleTodoCheckClick} />
      {task}
      <input ref={updateTaskRef} placeholder={task} type="text" name={task} />
      <button type="button" onClick={() => handleUpdateTaskClick()}>UPDATE</button>
      <button type="button" onClick={() => handleDeleteTaskClick()}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  // todo: PropTypes.objectOf(PropTypes.object).isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool
  }).isRequired,
  handleDeleteTask: PropTypes.PropTypes.func.isRequired,
  handleToggleTodoCheck: PropTypes.PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.PropTypes.func.isRequired
};

export default TodoItem;
