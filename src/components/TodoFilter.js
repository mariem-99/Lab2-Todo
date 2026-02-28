export default function TodoFilter({ filter, onFilter }) {
  return (
    <div className="filter-row">
      {['all', 'active', 'completed'].map(f => (
        <button
          key={f}
          onClick={() => onFilter(f)}
          className={filter === f ? 'filter-active' : 'filter-inactive'}
        >
          {f}
        </button>
      ))}
    </div>
  );
}