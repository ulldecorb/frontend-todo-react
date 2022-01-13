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

  const handleDeleteTaskClick = () => {
    handleDeleteTask(id);
  };

  const handleNewtask = () => {
    setNewtask(updateTaskRef.current.value);
    handleUpdateTask(id, updateTaskRef.current.value);
    updateTaskRef.current.value = null;
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
      <input
        ref={updateTaskRef}
        type="text"
        className={completed ? 'task__input task__input--completed' : 'task__input'}
        name={task}
        data-testid="taskInput"
        value={newTask}
        onChange={() => handleNewtask()}
      />
      <button
        type="button"
        className="task__delete-button"
        data-testid="deleteTaskButton"
        onClick={() => handleDeleteTaskClick()}
      >
        <i className="fas fa-minus-circle" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
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
