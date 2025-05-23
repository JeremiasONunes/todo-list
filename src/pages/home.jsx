import Header from "../components/header";
import TaskForm from "../components/Taskform";
import TaskList from "../components/Tasklist";
import { useTasks } from "../hooks/useTasks"; 

export default function Home() {
  const {
    filteredTasks,
    searchTerm,
    setSearchTerm,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks();

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      
      <main className="max-w-xl mx-auto mt-8">
        <TaskForm onAdd={addTask} />

        <input
          type="text"
          placeholder="Pesquisar tarefas (mínimo 3 letras)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 mt-4 rounded w-144 bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
    </>
    
  );
}
