export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span style={{
        flex: 1,
        color: todo.completed ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
        textDecoration: todo.completed ? 'line-through' : 'none',
        fontSize: '0.95rem'
      }}>
        {todo.text}
      </span>
      <button className="danger" onClick={() => onDelete(todo.id)}>✕</button>
    </li>
  );
}