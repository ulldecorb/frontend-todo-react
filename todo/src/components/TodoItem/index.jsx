import React from 'react';
import { PropTypes } from 'prop-types';

export const TodoItem = function TodoItem({ data, handleDeleteTask }) {
  const { id, task, completed } = data;
  return (
    <>
      <span>
        <input type="checkbox" name="completed" checked={completed} />
        {task}
      </span>
      <button type="button" onClick={(e) => handleDeleteTask(e, id)}>Delete</button>
    </>
  );
};

TodoItem.propTypes = {
  data: PropTypes.shape({
    task: String,
    id: Number,
    completed: Boolean
  }).isRequired,
  handleDeleteTask: PropTypes.func.isRequired
};

export default TodoItem;
