import React, { useState, useRef } from 'react';
import { TodoList } from './components/TodoList';
import List from './constants/List';

export const App = function App() {
  const [todos, setTodos] = useState([...List]);

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
    const newId = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 0;
    const newTask = newTaskRef.current.value;
    const newTodo = { id: newId, task: newTask, complete: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    newTaskRef.current.value = null;
  };

  const handleUpdateTask = (id, task) => {
    if (task !== '') {
      const newTodos = [...todos];
      const newTodo = newTodos.find((todo) => todo.id === id);
      newTodo.task = task;
      setTodos(newTodos);
    }
  };

  const handleResetList = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <section>
      <TodoList
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        handleToggleTodoCheck={handleToggleTodoCheck}
        handleUpdateTask={handleUpdateTask}
      />
      <input
        type="text"
        placeholder="Write new task"
        name="addtask"
        id="addtask"
        ref={newTaskRef}
      />
      <button type="button" onClick={() => handleCreateNewTask()}>ADD TASK</button>
      <button type="button" onClick={() => handleResetList()}>RESET</button>
    </section>
  );
};

export default App;
