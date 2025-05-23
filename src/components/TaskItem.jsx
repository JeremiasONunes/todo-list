export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-gray-700 text-gray-100 p-3 rounded-lg mb-2 shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="accent-gray-400 w-5 h-5"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 font-bold"
      >
        ✕
      </button>
    </div>
  );
}
