# 📚 Guia de Tecnologias - ToDo List

Este documento explica todas as tecnologias utilizadas no projeto ToDo List, ideal para uso em aulas e aprendizado.

## 🌐 Fundamentos Web

### HTML (HyperText Markup Language)
- **O que é**: Linguagem de marcação que estrutura o conteúdo das páginas web
- **História**: Criada em 1990 por Tim Berners-Lee no CERN
- **Função**: Define elementos como títulos, parágrafos, botões, formulários através de tags
- **Como funciona**: Usa tags (elementos) para marcar diferentes tipos de conteúdo
- **Estrutura básica**: `<html>` → `<head>` (metadados) + `<body>` (conteúdo visível)
- **No projeto**: Estrutura básica dos componentes React (JSX é baseado em HTML)
- **Exemplo prático**: 
```html
<div>           <!-- Container -->
  <h1>Título</h1>    <!-- Cabeçalho -->
  <input type="text"> <!-- Campo de entrada -->
  <button>Clique</button> <!-- Botão -->
</div>
```

### CSS (Cascading Style Sheets)
- **O que é**: Linguagem de estilização que define a aparência visual das páginas
- **História**: Criada em 1996 para separar conteúdo (HTML) de apresentação (CSS)
- **Função**: Controla cores, tamanhos, posicionamento, animações, responsividade
- **Como funciona**: Seleciona elementos HTML e aplica regras de estilo
- **Cascata**: Estilos podem ser herdados e sobrescritos (daí o nome "Cascading")
- **No projeto**: Usado através do Tailwind CSS e classes customizadas
- **Exemplo prático**:
```css
.botao {
  background-color: blue;    /* Cor de fundo */
  color: white;             /* Cor do texto */
  padding: 10px 20px;       /* Espaçamento interno */
  border-radius: 5px;       /* Bordas arredondadas */
  border: none;             /* Remove borda padrão */
}
```

## ⚛️ React

### O que é React?
- **Definição**: Biblioteca JavaScript para criar interfaces de usuário interativas
- **Criado por**: Facebook (Meta) em 2013, por Jordan Walke
- **Filosofia**: "Aprenda uma vez, escreva em qualquer lugar"
- **Conceito principal**: Componentes reutilizáveis que gerenciam seu próprio estado
- **Virtual DOM**: React cria uma representação virtual da interface na memória, comparando mudanças e atualizando apenas o necessário (muito mais rápido)
- **Declarativo vs Imperativo**: Você descreve COMO a interface deve parecer, não COMO fazer as mudanças
- **Vantagens**: 
  - Interface reativa (atualiza automaticamente quando dados mudam)
  - Componentização (código organizado e reutilizável)
  - Ecossistema rico (milhares de bibliotecas)
  - Performance otimizada (Virtual DOM)
  - Comunidade ativa e suporte da Meta

### Conceitos React no Projeto

#### JSX (JavaScript XML)
- **O que é**: Extensão de sintaxe que permite escrever HTML dentro do JavaScript
- **Por que usar**: Torna o código mais legível e intuitivo
- **Diferenças do HTML**: `className` em vez de `class`, `onClick` em vez de `onclick`
- **Interpolação**: Usa `{}` para inserir JavaScript no HTML
```jsx
// Mistura HTML com JavaScript de forma natural
const titulo = "Minha Lista";
return (
  <div className="container">
    <h1>{titulo}</h1>                    {/* Variável JavaScript */}
    <p>Você tem {tasks.length} tarefas</p> {/* Expressão JavaScript */}
  </div>
);
```

#### Componentes
- **Conceito**: Funções que retornam JSX, como "peças de LEGO" reutilizáveis
- **Tipos**: Funcionais (modernas) e de Classe (legadas)
- **Nomenclatura**: Sempre começam com letra maiúscula
- **Reutilização**: Um componente pode ser usado várias vezes com dados diferentes
```jsx
// Componente simples que recebe dados e renderiza
function TaskItem({ task }) {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button>Deletar</button>
    </div>
  );
}

// Uso do componente
<TaskItem task={{text: "Estudar React"}} />
<TaskItem task={{text: "Fazer exercícios"}} />
```

#### Props (Properties)
- **Conceito**: Dados passados de um componente pai para um componente filho
- **Analogia**: Como argumentos de uma função
- **Imutáveis**: Props não podem ser modificadas pelo componente filho
- **Fluxo**: Sempre de pai para filho (unidirecional)
```jsx
// Componente pai passa dados para o filho
function App() {
  const minhaTask = {id: 1, text: "Estudar"};
  
  return (
    <TaskItem 
      task={minhaTask}           // Passa objeto
      onDelete={deletarTask}     // Passa função
      isCompleted={false}        // Passa boolean
    />
  );
}

// Componente filho recebe e usa as props
function TaskItem({ task, onDelete, isCompleted }) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>
        Deletar
      </button>
    </div>
  );
}
```

#### State (useState)
- **Conceito**: Dados que podem mudar ao longo do tempo e fazem o componente re-renderizar
- **Hook**: useState é um "gancho" que adiciona estado a componentes funcionais
- **Reatividade**: Quando o estado muda, React automaticamente atualiza a interface
- **Imutabilidade**: Nunca modifique o estado diretamente, sempre use a função setter
```jsx
import { useState } from 'react';

function Contador() {
  // [valor atual, função para alterar]
  const [count, setCount] = useState(0); // Estado inicial = 0
  
  const incrementar = () => {
    setCount(count + 1); // Cria novo estado, não modifica o atual
  };
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}
```

#### Effects (useEffect)
- **Conceito**: Executa código em momentos específicos do ciclo de vida do componente
- **Casos de uso**: Buscar dados, salvar no localStorage, configurar timers
- **Dependências**: Array que controla quando o effect executa
- **Cleanup**: Função de limpeza para evitar vazamentos de memória
```jsx
import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  // Executa após cada renderização
  useEffect(() => {
    console.log('Componente renderizou');
  });
  
  // Executa apenas uma vez (componentDidMount)
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []); // Array vazio = executa só uma vez
  
  // Executa quando 'tasks' mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Executa quando tasks mudar
  
  return <div>{/* renderizar tasks */}</div>;
}
```

#### Custom Hooks
- **Conceito**: Funções que encapsulam lógica reutilizável usando hooks do React
- **Nomenclatura**: Sempre começam com "use"
- **Vantagem**: Compartilhar lógica entre componentes sem duplicar código
- **Composição**: Podem usar outros hooks internamente
```jsx
// Hook customizado que gerencia lista de tarefas
function useTasks() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };
  
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };
  
  // Retorna estado e funções para usar em qualquer componente
  return { tasks, addTask, deleteTask };
}

// Uso em componente
function App() {
  const { tasks, addTask, deleteTask } = useTasks();
  
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
}
```

## ⚡ Vite

### O que é Vite?
- **Definição**: Ferramenta de build moderna e extremamente rápida para desenvolvimento web
- **Criado por**: Evan You (criador do Vue.js) em 2020
- **Nome**: "Vite" significa "rápido" em francês
- **Problema que resolve**: Webpack e outras ferramentas ficaram lentas com projetos grandes
- **Arquitetura**: Usa ES modules nativos do navegador + esbuild (escrito em Go)

### Como Vite Funciona
- **Desenvolvimento**: Serve arquivos diretamente via ES modules (sem bundling)
- **Hot Module Replacement (HMR)**: Atualiza apenas o módulo que mudou
- **Build**: Usa Rollup para criar bundle otimizado para produção
- **Pré-processamento**: Suporte nativo para TypeScript, JSX, CSS, etc.

### Vantagens do Vite
- **Velocidade**: Start instantâneo do servidor (< 1 segundo)
- **Hot Reload**: Mudanças aparecem instantaneamente no navegador
- **Build otimizado**: Código final minificado, tree-shaking, code splitting
- **Suporte moderno**: ES modules, TypeScript, CSS preprocessors
- **Configuração mínima**: Funciona "out of the box"

### React + Vite vs Create React App
```bash
# Vite (moderno, rápido)
npm create vite@latest meu-projeto -- --template react
cd meu-projeto
npm install
npm run dev

# Create React App (tradicional, mais lento)
npx create-react-app meu-projeto
cd meu-projeto
npm start
```

## 🎨 Tailwind CSS

### O que é Tailwind?
- **Definição**: Framework CSS utility-first que fornece classes de baixo nível
- **Filosofia**: Em vez de componentes pré-construídos, oferece "utilitários" para construir designs
- **Criado por**: Adam Wathan em 2017
- **Diferencial**: Você compõe estilos através de classes pequenas e específicas

### Utility-First vs Component-First
```html
<!-- Abordagem tradicional (Bootstrap) -->
<button class="btn btn-primary btn-lg">
  Botão
</button>

<!-- Abordagem Tailwind (utility-first) -->
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
  Botão
</button>
```

### Vantagens do Tailwind
- **Produtividade**: Estilização rápida sem sair do HTML
- **Consistência**: Design system integrado com escala de cores, espaçamentos
- **Responsivo**: Classes para diferentes tamanhos de tela
- **Customizável**: Configuração flexível via tailwind.config.js
- **Performance**: Remove CSS não utilizado automaticamente (purging)
- **Manutenibilidade**: Mudanças localizadas, sem CSS global conflitante

### Sistema de Classes Tailwind
```html
<!-- Layout e Flexbox -->
<div class="flex justify-center items-center h-screen">

<!-- Espaçamento (baseado em múltiplos de 0.25rem) -->
<div class="p-4 m-2 gap-3">  <!-- p-4 = padding: 1rem -->

<!-- Cores (escala de 50-950) -->
<div class="bg-blue-500 text-white border-gray-200">

<!-- Responsividade (mobile-first) -->
<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">

<!-- Estados (hover, focus, active) -->
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
```

### Classes Customizadas no Projeto
```css
/* Usando @apply para criar componentes reutilizáveis */
.glass-effect {
  @apply backdrop-blur-sm bg-white/10 border border-white/20;
  /* Equivale a:
     backdrop-filter: blur(4px);
     background-color: rgba(255, 255, 255, 0.1);
     border: 1px solid rgba(255, 255, 255, 0.2);
  */
}

.btn-primary {
  @apply bg-gradient-to-r from-purple-500 to-pink-500 
         hover:from-purple-600 hover:to-pink-600 
         text-white font-medium px-6 py-3 rounded-xl 
         shadow-lg hover:shadow-xl transform hover:scale-105;
}
```

## 📦 Bibliotecas Utilizadas

### React Router DOM
- **Função**: Biblioteca para navegação entre páginas em Single Page Applications (SPA)
- **Problema que resolve**: Como navegar entre "páginas" sem recarregar o navegador
- **Conceito**: Muda o conteúdo baseado na URL, mantendo a aplicação em uma única página
- **Vantagem**: Navegação rápida, experiência fluida, URLs amigáveis

#### Componentes Principais
- **BrowserRouter**: Habilita roteamento baseado na URL do navegador
- **Routes**: Container que define todas as rotas possíveis
- **Route**: Define uma rota individual (URL → Componente)
- **Link**: Navegação sem recarregar a página (substitui `<a>`)

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navegação */}
      <nav>
        <Link to="/">Home</Link>           {/* Não recarrega */}
        <Link to="/sobre">Sobre</Link>     {/* Não recarrega */}
      </nav>
      
      {/* Definição das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas (Organização por Tipo)
```
src/
├── components/     # Componentes reutilizáveis (UI)
│   ├── Header.jsx     # Cabeçalho da aplicação
│   ├── TaskForm.jsx   # Formulário de nova tarefa
│   ├── TaskList.jsx   # Lista de tarefas
│   └── TaskItem.jsx   # Item individual de tarefa
├── hooks/         # Lógica customizada e reutilizável
│   └── useTasks.js    # Gerenciamento de estado das tarefas
├── pages/         # Páginas/telas da aplicação
│   ├── Home.jsx       # Página principal
│   └── About.jsx      # Página sobre
├── App.jsx        # Componente raiz (roteamento)
├── main.jsx       # Ponto de entrada (renderiza App)
└── index.css      # Estilos globais
```

### Fluxo de Dados (Arquitetura Unidirecional)
```
main.jsx (inicialização)
  ↓
App.jsx (roteamento entre páginas)
  ↓
Home.jsx (página principal - gerencia estado global)
  ↓
useTasks.js (hook customizado - lógica de negócio)
  ↓
TaskForm.jsx + TaskList.jsx (componentes de UI)
  ↓
TaskItem.jsx (componente individual - recebe props)
```

### Separação de Responsabilidades
- **Pages**: Gerenciam estado global e layout da página
- **Components**: Componentes reutilizáveis de UI, recebem dados via props
- **Hooks**: Lógica de negócio e gerenciamento de estado
- **App.jsx**: Configuração de rotas e estrutura global

## 💾 Persistência de Dados

### localStorage (Web Storage API)
- **O que é**: API do navegador para armazenar dados localmente no dispositivo do usuário
- **Persistência**: Dados permanecem mesmo após fechar o navegador
- **Escopo**: Dados são específicos por domínio (site)
- **Capacidade**: ~5-10MB por domínio (varia por navegador)
- **Formato**: Apenas strings (precisa serializar objetos)
- **Uso no projeto**: Salvar lista de tarefas entre sessões

#### Como Funciona
```javascript
// Salvar dados (converte objeto para string JSON)
const tasks = [{id: 1, text: "Estudar React"}];
localStorage.setItem('tarefas', JSON.stringify(tasks));

// Recuperar dados (converte string JSON para objeto)
const saved = localStorage.getItem('tarefas');
const tasks = saved ? JSON.parse(saved) : [];

// Verificar se existe
if (localStorage.getItem('tarefas')) {
  // Dados existem
}

// Remover dados
localStorage.removeItem('tarefas');

// Limpar tudo
localStorage.clear();
```

#### Alternativas de Persistência
- **sessionStorage**: Dados removidos ao fechar aba
- **IndexedDB**: Banco de dados no navegador (mais complexo)
- **Cookies**: Dados enviados ao servidor (limitado)
- **Backend**: Banco de dados real (MySQL, MongoDB, etc.)

## 🎯 Padrões de Desenvolvimento

### Controlled Components
- **Conceito**: React controla completamente o valor dos inputs de formulário
- **Vantagem**: Estado sempre sincronizado, validação em tempo real
- **Fluxo**: Valor vem do estado → Input exibe → Usuário digita → onChange atualiza estado
```jsx
function FormularioControlado() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <input
        type="text"
        value={nome}                           // Valor controlado pelo React
        onChange={(e) => setNome(e.target.value)} // Atualiza estado
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <p>Olá, {nome}! Seu email é {email}</p>  {/* Reativo */}
    </form>
  );
}
```

### Conditional Rendering
- **Conceito**: Renderizar diferentes elementos baseado em condições
- **Técnicas**: Operador ternário, && lógico, if/else
- **Uso**: Mostrar/ocultar elementos, estados de loading, mensagens de erro
```jsx
function TaskItem({ task, isEditing }) {
  return (
    <div>
      {/* Operador ternário */}
      {isEditing ? (
        <input defaultValue={task.text} />
      ) : (
        <span>{task.text}</span>
      )}
      
      {/* Operador && (só renderiza se verdadeiro) */}
      {task.completed && <span>✓ Concluída</span>}
      
      {/* Múltiplas condições */}
      {task.priority === 'high' && !task.completed && (
        <span className="urgent">Urgente!</span>
      )}
    </div>
  );
}
```

### Event Handling
- **Conceito**: Responder a ações do usuário (cliques, digitação, etc.)
- **SyntheticEvents**: React envolve eventos nativos para consistência entre navegadores
- **Binding**: Funções precisam ser "amarradas" ao contexto correto
```jsx
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  
  // Função que lida com clique
  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Função que lida com teclas
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Salvar tarefa
    } else if (event.key === 'Escape') {
      // Cancelar edição
    }
  };
  
  // Função que lida com formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne reload da página
    // Processar dados do formulário
  };
  
  return (
    <div>
      <button onClick={() => handleDelete(1)}>
        Deletar Tarefa 1
      </button>
      
      <input
        onKeyDown={handleKeyPress}
        onChange={(e) => console.log(e.target.value)}
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
```

## 🎨 Conceitos de Design

### Glass Morphism
- **Conceito**: Tendência de design que simula vidro fosco/translúcido
- **Elementos**: Blur (desfoque), transparência, bordas sutis, sombras suaves
- **Origem**: Popularizado pelo iOS e macOS da Apple
- **Implementação CSS**:
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);    /* Fundo semi-transparente */
  backdrop-filter: blur(10px);              /* Desfoque do fundo */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borda sutil */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);  /* Sombra suave */
}
```

### Gradientes
- **Conceito**: Transição suave entre duas ou mais cores
- **Tipos**: 
  - Linear: linha reta (horizontal, vertical, diagonal)
  - Radial: circular/elíptico
  - Cônico: rotacional
- **No projeto**: Gradiente roxo para rosa nos títulos e botões
```css
/* Linear horizontal */
background: linear-gradient(to right, #8B5CF6, #EC4899);

/* Linear diagonal */
background: linear-gradient(45deg, #8B5CF6, #EC4899);

/* Radial */
background: radial-gradient(circle, #8B5CF6, #EC4899);

/* Múltiplas cores */
background: linear-gradient(to right, #8B5CF6, #A855F7, #EC4899);
```

### Responsividade
- **Conceito**: Design que se adapta a diferentes tamanhos de tela
- **Mobile First**: Projetar primeiro para mobile, depois expandir
- **Breakpoints**: Pontos onde o layout muda
- **Técnicas**: Flexbox, CSS Grid, media queries, unidades relativas

#### Breakpoints Tailwind
```css
/* Tailwind breakpoints */
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeno */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

```html
<!-- Responsivo com Tailwind -->
<div class="
  w-full          <!-- Mobile: largura total -->
  md:w-1/2        <!-- Tablet: metade da largura -->
  lg:w-1/3        <!-- Desktop: um terço -->
  xl:w-1/4        <!-- Desktop grande: um quarto -->
">
```

## 🔧 Ferramentas de Desenvolvimento

### npm (Node Package Manager)
- **O que é**: Gerenciador de pacotes para JavaScript, vem com Node.js
- **Função**: Instalar, atualizar e gerenciar dependências do projeto
- **package.json**: Arquivo que lista todas as dependências e scripts
- **node_modules**: Pasta onde ficam as bibliotecas instaladas
- **Comandos essenciais**:
```bash
npm init                    # Cria novo projeto
npm install                 # Instala todas as dependências
npm install react          # Instala biblioteca específica
npm install -D eslint      # Instala como dependência de desenvolvimento
npm run dev                # Executa script de desenvolvimento
npm run build              # Gera build de produção
npm update                 # Atualiza dependências
```

### ESLint
- **O que é**: Ferramenta que analisa código JavaScript para encontrar problemas
- **Função**: Detecta erros, inconsistências de estilo, más práticas
- **Configuração**: Arquivo .eslintrc.js define regras
- **Integração**: Funciona com editores (VS Code) e build tools
- **Benefícios**: Código mais limpo, consistente e livre de bugs

### Git (Controle de Versão)
- **O que é**: Sistema de controle de versão distribuído
- **Função**: Rastrear mudanças no código, colaboração em equipe
- **Conceitos**: Repository, commit, branch, merge
- **Comandos básicos**:
```bash
git init                    # Inicializa repositório
git add .                   # Adiciona arquivos ao staging
git commit -m "mensagem"    # Salva mudanças
git push                    # Envia para repositório remoto
git pull                    # Baixa mudanças do remoto
git branch feature-nova     # Cria nova branch
git checkout main           # Muda para branch main
```

## 📱 Funcionalidades Modernas

### Single Page Application (SPA)
- **Conceito**: Aplicação web que carrega uma única página HTML e atualiza conteúdo dinamicamente
- **Como funciona**: JavaScript manipula o DOM para simular navegação entre páginas
- **Vantagens**: 
  - Navegação rápida (sem reload)
  - Experiência fluida como app nativo
  - Menos dados transferidos
- **Desvantagens**: 
  - SEO mais complexo
  - Carregamento inicial pode ser lento
  - Requer JavaScript habilitado

### Progressive Web App (PWA) Ready
- **Conceito**: Aplicações web que funcionam como aplicativos nativos
- **Recursos**: 
  - Instalável na tela inicial
  - Funciona offline
  - Notificações push
  - Acesso a APIs do dispositivo
- **Tecnologias**: Service Workers, Web App Manifest, HTTPS
- **Vantagem**: Uma base de código para web e mobile

### ES6+ Features (JavaScript Moderno)
#### Arrow Functions
```javascript
// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const somar = (a, b) => a + b;

// Com uma linha, return implícito
const dobrar = x => x * 2;

// Útil em arrays
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6]
```

#### Destructuring
```javascript
// Objetos
const pessoa = { nome: 'João', idade: 30, cidade: 'SP' };
const { nome, idade } = pessoa; // Extrai propriedades

// Arrays
const cores = ['red', 'green', 'blue'];
const [primeira, segunda] = cores; // primeira = 'red', segunda = 'green'

// Em parâmetros de função
function TaskItem({ task, onDelete, onEdit }) {
  // Já extrai as propriedades do objeto props
}
```

#### Template Literals
```javascript
// String tradicional
const mensagem = 'Olá, ' + nome + '! Você tem ' + idade + ' anos.';

// Template literal
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;

// Múltiplas linhas
const html = `
  <div>
    <h1>${titulo}</h1>
    <p>${descricao}</p>
  </div>
`;
```

#### Modules (Import/Export)
```javascript
// Exportar (utils.js)
export const somar = (a, b) => a + b;
export const multiplicar = (a, b) => a * b;
export default function calcular() { /* ... */ }

// Importar
import calcular, { somar, multiplicar } from './utils.js';
import * as utils from './utils.js'; // Importa tudo
import { somar as adicionar } from './utils.js'; // Renomeia
```

## 🎓 Roadmap de Aprendizado

### Iniciante (Fundamentos)
1. **HTML5**: Semântica, formulários, acessibilidade
2. **CSS3**: Flexbox, Grid, animações, responsividade
3. **JavaScript ES6+**: Variáveis, funções, arrays, objetos, DOM
4. **React Básico**: Componentes, JSX, props, estado
5. **Git**: Comandos básicos, GitHub

### Intermediário (Desenvolvimento)
1. **React Hooks**: useState, useEffect, useContext
2. **Event Handling**: Formulários, validação
3. **Conditional Rendering**: Lógica de exibição
4. **Tailwind CSS**: Sistema de design, responsividade
5. **React Router**: Navegação, rotas protegidas

### Avançado (Produção)
1. **Custom Hooks**: Lógica reutilizável
2. **Context API**: Gerenciamento de estado global
3. **Performance**: React.memo, useMemo, useCallback
4. **Testing**: Jest, React Testing Library
5. **Deploy**: Vercel, Netlify, CI/CD

## 📚 Recursos para Estudar

### Documentação Oficial (Sempre Atualizada)
- [React](https://react.dev/) - Documentação oficial com tutoriais interativos
- [Vite](https://vitejs.dev/) - Guias de configuração e otimização
- [Tailwind CSS](https://tailwindcss.com/) - Referência completa de classes
- [React Router](https://reactrouter.com/) - Guias de roteamento

### Cursos Recomendados
- **Gratuitos**: 
  - freeCodeCamp (React)
  - React Tutorial oficial
  - Scrimba (React)
- **Pagos**: 
  - Rocketseat
  - Alura
  - Udemy

### Prática
- **Projetos**: Todo List, Blog, E-commerce simples
- **Desafios**: Frontend Mentor, Codepen
- **Comunidade**: Discord React Brasil, Stack Overflow

---

**💡 Dica Final**: Este projeto ToDo List é uma excelente base para aprender desenvolvimento web moderno. Cada tecnologia tem sua função específica e juntas criam uma aplicação robusta, performática e moderna. Comece pelos fundamentos e vá evoluindo gradualmente!