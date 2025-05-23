import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tarefas");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks =
    searchTerm.length >= 3
      ? tasks.filter((task) =>
          task.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : tasks;

  return {
    tasks,
    filteredTasks,
    searchTerm,
    setSearchTerm,
    addTask,
    toggleTask,
    deleteTask,
  };
}
