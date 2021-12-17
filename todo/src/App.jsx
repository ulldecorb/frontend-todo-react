import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import List from './constants/List';

export const App = function App() {
  const [todos, setTodos] = useState([...List]);

  const handleDeleteTask = (event, id) => {
    event.preventDefault();
    const newTodos = todos.filter((task) => task.id !== id);
    setTodos(newTodos);
  };

  const handleResetList = () => {
    setTodos([]);
  };

  return (
    <section>
      <TodoList todos={todos} handleDeleteTask={handleDeleteTask} />
      <button type="button" onClick={() => handleResetList()}>RESET</button>
    </section>
  );
};

export default App;
