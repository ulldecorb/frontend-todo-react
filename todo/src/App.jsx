import React from 'react';
import { TodoList } from './components/TodoList';
import List from './constants/List';

export const App = function App() {
  // const [todos, setTodos] = useState([...List]);
  const todos = [...List];

  // function deleteTask(id) {
  //   const newtodos = todos.filter((task) => task.id !== id);
  //   setTodos(newtodos);
  // }

  return (
    <section>
      <TodoList todos={todos} />
    </section>
  );
};

export default App;
