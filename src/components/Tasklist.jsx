// Importa o componente TaskItem que representa cada tarefa individual
import TaskItem from "./TaskItem";

// Componente TaskList - lista que renderiza todas as tarefas
// Props recebidas:
// - tasks: array com todas as tarefas a serem exibidas
// - onToggle: função para marcar/desmarcar tarefas
// - onDelete: função para deletar tarefas
// - onEdit: função para editar tarefas
export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  // Renderização condicional: se não há tarefas, mostra mensagem
  if (tasks.length === 0) {
    return (
      // Mensagem quando a lista está vazia
      <p className="text-gray-400 text-center mt-4">
        {/* 
          Classes da mensagem:
          - text-gray-400: cor cinza clara
          - text-center: texto centralizado
          - mt-4: margem superior de 16px
        */}
        Nenhuma tarefa por enquanto. Adicione uma nova!
      </p>
    );
  }

  // Se há tarefas, renderiza a lista
  return (
    <div className="mt-4">
      {/* 
        Container da lista:
        - mt-4: margem superior de 16px
      */}
      
      {/* 
        Método map(): itera sobre o array de tarefas e cria um TaskItem para cada uma
        - tasks.map() percorre cada elemento do array
        - Para cada task, retorna um componente TaskItem
        - key={task.id}: propriedade obrigatória do React para identificar elementos únicos na lista
      */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Chave única para otimização do React
          task={task} // Passa o objeto da tarefa como prop
          onToggle={onToggle} // Repassa a função de toggle
          onDelete={onDelete} // Repassa a função de deletar
          onEdit={onEdit} // Repassa a função de editar
        />
      ))}
    </div>
  );
}
