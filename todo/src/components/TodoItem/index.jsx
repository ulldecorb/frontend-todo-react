import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import '../../style/todoItem.css';

export const TodoItem = function TodoItem({
  todo, handleDeleteTask, handleToggleTodoCheck, handleUpdateTask
}) {
  const { id, task, completed } = todo;

  const [newTask, setNewtask] = useState(task);

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

  const handleNewtask = () => {
    setNewtask(updateTaskRef.current.value);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        data-testid="checkboxInput"
        name="completed"
        className="task__checkbox"
        checked={completed}
        onChange={handleToggleTodoCheckClick}
      />
      {/* <p className={completed && 'completed'}>{task}</p> */}
      <input
        ref={updateTaskRef}
      // placeholder={task}
        type="text"
        name={task}
        value={newTask}
        onChange={() => handleNewtask()}
      />
      <button
        type="button"
        className="task__update-button"
        onClick={() => handleUpdateTaskClick()}
      >
        UPDATE
      </button>
      <button
        type="button"
        className="task__delete-button"
        onClick={() => handleDeleteTaskClick()}
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  // todo: PropTypes.objectOf(PropTypes.object).isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  handleDeleteTask: PropTypes.PropTypes.func.isRequired,
  handleToggleTodoCheck: PropTypes.PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.PropTypes.func.isRequired
};

export default TodoItem;
