import React, { useState, useRef } from 'react';
import { v4 as randomNewId } from 'uuid';
import { TodoList } from './components/TodoList';
import './style/app.css';

export const App = function App() {
  const [todos, setTodos] = useState([]);
  const newTaskRef = useRef();

  const handleToggleTodoCheck = (id) => {
    const newTodos = [...todos];
    const newTodo = newTodos.find((todo) => todo.id === id);
    newTodo.completed = !newTodo.completed;
    setTodos(newTodos);
  };

  const handleDeleteTask = (id) => {
    const newTodos = todos.filter((task) => task.id !== id);
    setTodos(newTodos);
  };

  const handleCreateNewTask = () => {
    if (newTaskRef.current.value !== '') {
      const newId = randomNewId();
      const newTask = newTaskRef.current.value;
      const newTodo = { id: newId, task: newTask, completed: false };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      newTaskRef.current.value = null;
    }
  };

  const handleEnterTask = (event) => {
    if (event.key === 'Enter') {
      handleCreateNewTask();
    }
  };

  const handleUpdateTask = (id, task) => {
    const newTodos = [...todos];
    const newTodo = newTodos.find((todo) => todo.id === id);
    newTodo.task = task;
    setTodos(newTodos);
  };

  const handleResetList = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <section className="list">
      <h1 className="list__title">TODO LIST</h1>
      <TodoList
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        handleToggleTodoCheck={handleToggleTodoCheck}
        handleUpdateTask={handleUpdateTask}
      />
      <section className="list__controls">
        <div className="controls__info">
          { todos.length === 0
            ? <span className="info__text">Start your list!</span>
            : (
              <>
                <span className="info__text">
                  { todos.filter((todo) => !todo.completed).length > 0
                    ? `There are ${todos.filter((todo) => !todo.completed).length} tasks to do`
                    : 'Good Job!'}
                </span>
                <button
                  className="info__delete-completed-button"
                  type="button"
                  data-testid="deleteCompletedButton"
                  onClick={() => handleResetList()}
                >
                  <i className="fas fa-trash-alt fa-lg" />
                </button>
              </>
            )}
        </div>
        <div className="controls__add-task-box">
          <input
            type="text"
            placeholder="Add new task"
            name="addtask"
            id="addtask"
            ref={newTaskRef}
            onKeyPress={handleEnterTask}
            className="add-task-box__input"
            autoComplete="off"
            maxLength="35"
          />
          <button
            type="button"
            onClick={() => handleCreateNewTask()}
            className="add-task-box__handle-add-button"
            data-testid="addButton"
          >
            <i className="fas fa-plus-circle fa-2x" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default App;
