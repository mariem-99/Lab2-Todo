import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import TodoFilter from './components/TodoFilter';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const handleAdd = (text) => setTodos([...todos, { id: Date.now(), text, completed: false }]);
  const handleDelete = (id) => setTodos(todos.filter(t => t.id !== id));
  const handleToggle = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>✨ My Todo App</h1>
      <div className="card">
        <TodoForm onAdd={handleAdd} />
        <TodoFilter filter={filter} onFilter={setFilter} />
        <TodoStats total={todos.length} completed={todos.filter(t => t.completed).length} />
        <TodoList todos={filteredTodos} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  );
}