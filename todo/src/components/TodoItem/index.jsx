import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = function TodoItem({ todo }) {
  const { task, completed } = todo;
  return (
    <li>
      <input type="checkbox" name="completed" checked={completed} />
      {task}
    </li>
  // <button type="button" onclick={deleteTask(id)}>Delete</button>
  );
};

// TodoItem.propTypes = {
//   todo: PropTypes.shape({}).isRequied
// };

TodoItem.propTypes = {
  todo: PropTypes.shape({
    task: String,
    id: String,
    completed: Boolean
  }).isRequired
};

export default TodoItem;
