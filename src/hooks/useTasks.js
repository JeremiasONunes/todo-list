// Importando hooks do React para gerenciar estado e efeitos colaterais
import { useState, useEffect } from "react";

// Hook customizado para gerenciar todas as operações relacionadas às tarefas
export function useTasks() {
  // Estado das tarefas - inicializa carregando dados do localStorage
  // useState com função lazy: só executa na primeira renderização
  const [tasks, setTasks] = useState(() => {
    // Tenta recuperar tarefas salvas no navegador
    const saved = localStorage.getItem("tarefas");
    // Se existir dados salvos, converte de JSON para array, senão retorna array vazio
    return saved ? JSON.parse(saved) : [];
  });

  // Estado para o termo de busca/filtro das tarefas
  const [searchTerm, setSearchTerm] = useState("");

  // Efeito que salva as tarefas no localStorage sempre que o array tasks mudar
  // Isso garante persistência dos dados entre sessões do navegador
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]); // Dependência: executa quando 'tasks' mudar

  // Função para adicionar uma nova tarefa
  const addTask = (text) => {
    // Cria objeto da nova tarefa com propriedades necessárias
    const newTask = {
      id: Date.now(), // ID único baseado no timestamp atual
      text, // Texto da tarefa (shorthand property)
      completed: false, // Nova tarefa sempre começa como não concluída
    };
    // Atualiza o estado adicionando a nova tarefa no início do array
    // Usa função callback para acessar o estado anterior de forma segura
    setTasks((prev) => [newTask, ...prev]);
  };

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTask = (id) => {
    setTasks((prev) =>
      // Mapeia todas as tarefas, modificando apenas a que tem o ID correspondente
      prev.map((task) =>
        task.id === id 
          ? { ...task, completed: !task.completed } // Inverte o status completed
          : task // Mantém a tarefa inalterada
      )
    );
  };

  // Função para deletar uma tarefa pelo ID
  const deleteTask = (id) => {
    // Filtra o array removendo a tarefa com o ID especificado
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Função para editar o texto de uma tarefa existente
  const editTask = (id, newText) => {
    setTasks((prev) =>
      // Mapeia todas as tarefas, atualizando apenas a que tem o ID correspondente
      prev.map((task) =>
        task.id === id 
          ? { ...task, text: newText } // Atualiza o texto da tarefa
          : task // Mantém a tarefa inalterada
      )
    );
  };

  // Lógica de filtro/busca das tarefas
  // Só aplica filtro se o termo de busca tiver 3 ou mais caracteres
  const filteredTasks =
    searchTerm.length >= 3
      ? tasks.filter((task) =>
          // Busca case-insensitive: converte ambos para minúsculo
          task.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : tasks; // Se termo for menor que 3 chars, mostra todas as tarefas

  // Retorna objeto com todos os estados e funções que os componentes precisam
  return {
    tasks, // Array completo de tarefas
    filteredTasks, // Array filtrado pela busca
    searchTerm, // Termo atual de busca
    setSearchTerm, // Função para atualizar termo de busca
    addTask, // Função para adicionar tarefa
    toggleTask, // Função para marcar/desmarcar tarefa
    deleteTask, // Função para deletar tarefa
    editTask, // Função para editar tarefa
  };
}
