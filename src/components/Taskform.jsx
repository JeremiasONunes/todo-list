// Importa o hook useState para gerenciar o estado do input
import { useState } from "react";

// Componente TaskForm - formulário para adicionar novas tarefas
// Recebe 'onAdd' como prop - função que será chamada quando uma tarefa for adicionada
export default function TaskForm({ onAdd }) {
  // Estado local para armazenar o texto digitado no input
  // Inicializa com string vazia
  const [text, setText] = useState("");

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    
    // Remove espaços em branco do início e fim do texto
    const trimmed = text.trim();
    
    // Se o texto estiver vazio após o trim, não faz nada
    if (trimmed.length === 0) return;
    
    // Chama a função onAdd (vinda do componente pai) passando o texto
    onAdd(trimmed);
    
    // Limpa o campo de input após adicionar a tarefa
    setText("");
  };

  return (
    // Formulário com layout flex horizontal
    <form onSubmit={handleSubmit} className="flex gap-4">
      {/* 
        Classes do form:
        - flex: layout horizontal
        - gap-4: espaçamento de 16px entre elementos filhos
      */}
      
      {/* Campo de input para digitar a tarefa */}
      {/* 
        Classes do input:
        - input-modern: estilo customizado definido no CSS
        - flex-1: ocupa todo o espaço disponível no container flex
      */}
      <input
        type="text"
        value={text} // Valor controlado pelo estado React
        onChange={(e) => setText(e.target.value)} // Atualiza o estado a cada digitação
        placeholder="✨ Digite uma nova tarefa" // Texto de exemplo
        className="input-modern flex-1"
      />
      
      {/* Botão para enviar o formulário */}
      <button
        type="submit" // Tipo submit faz o botão disparar o evento onSubmit do form
        className="btn-primary" // Classe customizada para estilo do botão primário
      >
        ➕ Adicionar
      </button>
    </form>
  );
}
