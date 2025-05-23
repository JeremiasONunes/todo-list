import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">
        Nenhuma tarefa por enquanto. Adicione uma nova!
      </p>
    );
  }

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
