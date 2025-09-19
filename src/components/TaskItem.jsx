// Importa useState para gerenciar estados locais do componente
import { useState } from "react";

// Componente TaskItem - representa uma tarefa individual na lista
// Props recebidas:
// - task: objeto com dados da tarefa (id, text, completed)
// - onToggle: função para marcar/desmarcar tarefa como concluída
// - onDelete: função para deletar a tarefa
// - onEdit: função para editar o texto da tarefa
export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  // Estado para controlar se a tarefa está em modo de edição
  const [isEditing, setIsEditing] = useState(false);
  
  // Estado para armazenar o texto sendo editado
  // Inicializa com o texto atual da tarefa
  const [editText, setEditText] = useState(task.text);

  // Função que finaliza a edição e salva as mudanças
  const handleEdit = () => {
    // Só salva se o texto não estiver vazio após remover espaços
    if (editText.trim()) {
      // Chama a função onEdit passando o ID da tarefa e o novo texto
      onEdit(task.id, editText.trim());
    }
    // Sai do modo de edição
    setIsEditing(false);
  };

  // Função que lida com teclas pressionadas durante a edição
  const handleKeyPress = (e) => {
    // Enter: salva a edição
    if (e.key === 'Enter') handleEdit();
    
    // Escape: cancela a edição e restaura o texto original
    if (e.key === 'Escape') {
      setEditText(task.text); // Restaura o texto original
      setIsEditing(false); // Sai do modo de edição
    }
  };

  return (
    // Container principal da tarefa com efeito glass e animações
    <div className="glass-effect p-4 rounded-xl mb-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group">
      {/* 
        Classes do container:
        - glass-effect: efeito vidro fosco
        - p-4: padding de 16px
        - rounded-xl: bordas bem arredondadas
        - mb-3: margem inferior de 12px
        - shadow-lg: sombra grande
        - hover:shadow-xl: sombra extra grande no hover
        - transform hover:scale-[1.02]: aumenta 2% no hover
        - group: permite que elementos filhos respondam ao hover deste elemento
      */}
      
      {/* Layout interno da tarefa */}
      <div className="flex items-center justify-between">
        {/* 
          Classes do layout interno:
          - flex: layout horizontal
          - items-center: alinha verticalmente no centro
          - justify-between: espaça elementos nas extremidades
        */}
        
        {/* Seção esquerda: checkbox e texto/input */}
        <div className="flex items-center gap-4 flex-1">
          {/* 
            Classes da seção esquerda:
            - flex items-center: layout horizontal centralizado
            - gap-4: espaçamento de 16px entre elementos
            - flex-1: ocupa todo espaço disponível
          */}
          
          {/* Checkbox para marcar tarefa como concluída */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 accent-purple-500 rounded"
          />
          {/* 
            Classes do checkbox:
            - w-5 h-5: tamanho 20x20px
            - accent-purple-500: cor roxa para o checkbox marcado
            - rounded: bordas arredondadas
          */}
          
          {/* Renderização condicional: input de edição ou texto da tarefa */}
          {isEditing ? (
            // Modo de edição: mostra input de texto
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyPress}
              className="input-modern flex-1 text-sm py-2"
              autoFocus
            />
          ) : (
            // Modo normal: mostra o texto da tarefa
            <span 
              className={`text-lg font-medium cursor-pointer flex-1 ${
                task.completed 
                  ? 'line-through text-white/50' 
                  : 'text-white'
              }`}
              onDoubleClick={() => !task.completed && setIsEditing(true)}
              title="Duplo clique para editar"
            >
              {/* Ícone condicional: check se concluída, documento se pendente */}
              {task.completed ? '✓' : '📝'} {task.text}
            </span>
          )}
          {/* 
            Classes do input de edição:
            - input-modern: estilo customizado
            - flex-1: ocupa espaço disponível
            - text-sm: texto menor
            - py-2: padding vertical reduzido
            
            Classes do texto:
            - text-lg: texto grande
            - font-medium: peso médio
            - cursor-pointer: cursor de mão ao passar sobre
            - flex-1: ocupa espaço disponível
            - Condicional: line-through e opacidade se concluída
          */}
        </div>
        
        {/* Seção direita: botões de ação */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
          {/* 
            Classes dos botões:
            - flex gap-2: layout horizontal com espaçamento
            - opacity-0: invisível por padrão
            - group-hover:opacity-100: fica visível quando o pai (.group) recebe hover
            - transition-all: transição suave da opacidade
          */}
          
          {/* Botão de editar - só aparece se não estiver editando e tarefa não estiver concluída */}
          {!isEditing && !task.completed && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 p-2 rounded-lg transition-all"
              title="Editar"
            >
              ✏️
            </button>
          )}
          {/* 
            Classes do botão editar:
            - text-blue-400: cor azul
            - hover:text-blue-300: azul mais claro no hover
            - hover:bg-blue-500/20: fundo azul semi-transparente no hover
            - p-2: padding de 8px
            - rounded-lg: bordas arredondadas
            - transition-all: transição suave
          */}
          
          {/* Botão de deletar - sempre visível no hover */}
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/20 p-2 rounded-lg transition-all"
            title="Deletar"
          >
            🗑️
          </button>
          {/* 
            Classes do botão deletar:
            - text-red-400: cor vermelha
            - hover:text-red-300: vermelho mais claro no hover
            - hover:bg-red-500/20: fundo vermelho semi-transparente no hover
            - Demais classes iguais ao botão de editar
          */}
        </div>
      </div>
    </div>
  );
}