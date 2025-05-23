import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length === 0) return;
    onAdd(trimmed);
    setText(""); // limpa o campo
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma nova tarefa"
        className="flex-1 p-3 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        type="submit"
        className="bg-gray-600 hover:bg-gray-500 text-white px-4 rounded"
      >
        Adicionar
      </button>
    </form>
  );
}
