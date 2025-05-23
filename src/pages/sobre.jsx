import Header from "../components/header";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-6">
      <Header />
      <main className="max-w-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Sobre esta aplicação</h1>
        <p className="text-gray-300 mb-3 leading-relaxed">
          Esta é uma aplicação de lista de tarefas (ToDo List) desenvolvida com React e Vite. 
          Foi criada com o objetivo de praticar conceitos fundamentais do React como:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Componentização</li>
          <li>Hooks (useState, useEffect)</li>
          <li>Gerenciamento de estado</li>
          <li>Persistência com localStorage</li>
          <li>Navegação com React Router</li>
        </ul>
        <p className="text-gray-400">
          Desenvolvido por <strong>Seu Nome</strong> como parte de um projeto de estudo.
        </p>
      </main>
    </div>
  );
}
