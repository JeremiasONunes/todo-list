// Importações dos componentes necessários
import Header from "../components/header"; // Cabeçalho da aplicação
import TaskForm from "../components/Taskform"; // Formulário para adicionar tarefas
import TaskList from "../components/Tasklist"; // Lista de tarefas
import { useTasks } from "../hooks/useTasks"; // Hook customizado para gerenciar tarefas

// Componente Home - página principal da aplicação
export default function Home() {
  // Desestruturação: extrai funções e estados do hook useTasks
  const {
    filteredTasks, // Array de tarefas filtradas pela busca
    searchTerm, // Termo atual de busca
    setSearchTerm, // Função para atualizar termo de busca
    addTask, // Função para adicionar nova tarefa
    toggleTask, // Função para marcar/desmarcar tarefa
    deleteTask, // Função para deletar tarefa
    editTask, // Função para editar tarefa
  } = useTasks();

  return (
    // Fragment React (<>) para agrupar elementos sem criar div extra
    <>
      {/* Renderiza o cabeçalho */}
      <Header />
      
      {/* Container principal da página */}
      <div className="min-h-screen text-white px-4 py-8">
        {/* 
          Classes do container principal:
          - min-h-screen: altura mínima de 100vh (tela inteira)
          - text-white: texto branco
          - px-4: padding horizontal de 16px
          - py-8: padding vertical de 32px
        */}
        
        {/* Área de conteúdo principal */}
        <main className="max-w-2xl mx-auto">
          {/* 
            Classes do main:
            - max-w-2xl: largura máxima de 672px
            - mx-auto: margem horizontal automática (centraliza)
          */}
          
          {/* Seção de título e descrição */}
          <div className="text-center mb-8">
            {/* 
              Classes da seção de título:
              - text-center: texto centralizado
              - mb-8: margem inferior de 32px
            */}
            
            {/* Título principal com gradiente */}
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {/* 
                Classes do título:
                - text-4xl: tamanho de fonte muito grande (36px)
                - font-bold: peso da fonte negrito
                - mb-2: margem inferior de 8px
                - bg-gradient-to-r: gradiente horizontal
                - from-purple-400 to-pink-400: cores do gradiente
                - bg-clip-text: aplica gradiente apenas no texto
                - text-transparent: torna texto transparente para mostrar gradiente
              */}
              Organize suas tarefas
            </h2>
            
            {/* Subtítulo */}
            <p className="text-white/70 text-lg">
              {/* 
                Classes do subtítulo:
                - text-white/70: texto branco com 70% de opacidade
                - text-lg: tamanho de fonte grande (18px)
              */}
              Mantenha sua produtividade em dia
            </p>
          </div>

          {/* Card do formulário de adicionar tarefa */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            {/* 
              Classes do card do formulário:
              - glass-effect: efeito vidro fosco (classe customizada)
              - rounded-2xl: bordas muito arredondadas
              - p-6: padding de 24px em todos os lados
              - mb-6: margem inferior de 24px
            */}
            
            {/* Componente do formulário, passando a função addTask */}
            <TaskForm onAdd={addTask} />
          </div>

          {/* Card do campo de busca */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            {/* Mesmas classes do card anterior */}
            
            {/* Campo de input para buscar tarefas */}
            <input
              type="text"
              placeholder="🔍 Pesquisar tarefas (mínimo 3 letras)..." // Texto de exemplo
              value={searchTerm} // Valor controlado pelo estado
              onChange={(e) => setSearchTerm(e.target.value)} // Atualiza estado ao digitar
              className="input-modern w-full"
              /* 
                Classes do input de busca:
                - input-modern: estilo customizado
                - w-full: largura 100%
              */
            />
          </div>

          {/* Componente da lista de tarefas */}
          <TaskList
            tasks={filteredTasks} // Passa as tarefas filtradas
            onToggle={toggleTask} // Passa função de toggle
            onDelete={deleteTask} // Passa função de deletar
            onEdit={editTask} // Passa função de editar
          />
        </main>
      </div>
    </>
  );
}