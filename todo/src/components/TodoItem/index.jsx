import React from 'react';
import { PropTypes } from 'prop-types';

export const TodoItem = function TodoItem({ data, handleDeleteTask, toggleTodoCheck }) {
  const { id, task, completed } = data;

  const handleCheckClick = () => {
    toggleTodoCheck(id);
  };

  return (
    <li>
      <input type="checkbox" name="completed" checked={completed} onChange={handleCheckClick} />
      <span>
        {task}
        {' : '}
        {id}
        {' : '}
        {completed ? 'true' : 'false'}
      </span>
      <button type="button" onClick={(event) => handleDeleteTask(event, id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  data: PropTypes.shape({
    task: String,
    id: Number,
    completed: Boolean
  }).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  toggleTodoCheck: PropTypes.func.isRequired
};

export default TodoItem;
