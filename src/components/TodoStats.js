export default function TodoStats({ total, completed }) {
  return (
    <div className="stats-row">
      <div><span>{total}</span>Total</div>
      <div><span style={{ color: '#34d399' }}>{completed}</span>Done</div>
      <div><span style={{ color: '#fbbf24' }}>{total - completed}</span>Left</div>
    </div>
  );
}