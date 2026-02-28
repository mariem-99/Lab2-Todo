import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p className="empty">✨ No todos here! Add one above</p>;
  }
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
}