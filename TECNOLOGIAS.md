# 📚 Guia de Tecnologias - ToDo List

Este documento explica todas as tecnologias utilizadas no projeto ToDo List, ideal para uso em aulas e aprendizado.

## 🌐 Fundamentos Web

### HTML (HyperText Markup Language)
- **O que é**: Linguagem de marcação que estrutura o conteúdo das páginas web
- **Função**: Define elementos como títulos, parágrafos, botões, formulários
- **No projeto**: Estrutura básica dos componentes React (JSX é baseado em HTML)
- **Exemplo**: `<div>`, `<input>`, `<button>`, `<form>`

### CSS (Cascading Style Sheets)
- **O que é**: Linguagem de estilização que define a aparência visual
- **Função**: Controla cores, tamanhos, posicionamento, animações
- **No projeto**: Usado através do Tailwind CSS e classes customizadas
- **Exemplo**: `color: white`, `padding: 16px`, `border-radius: 8px`

## ⚛️ React

### O que é React?
- **Definição**: Biblioteca JavaScript para criar interfaces de usuário
- **Criado por**: Facebook (Meta)
- **Conceito principal**: Componentes reutilizáveis
- **Vantagens**: 
  - Interface reativa (atualiza automaticamente)
  - Componentização (código organizado)
  - Ecossistema rico

### Conceitos React no Projeto

#### JSX (JavaScript XML)
```jsx
// Mistura HTML com JavaScript
return (
  <div className="container">
    <h1>{titulo}</h1>
  </div>
);
```

#### Componentes
```jsx
// Função que retorna JSX
function TaskItem({ task }) {
  return <div>{task.text}</div>;
}
```

#### Props
```jsx
// Dados passados entre componentes
<TaskItem task={minhaTask} onDelete={deletarTask} />
```

#### State (useState)
```jsx
// Gerencia dados que podem mudar
const [tasks, setTasks] = useState([]);
```

#### Effects (useEffect)
```jsx
// Executa código em momentos específicos
useEffect(() => {
  // Salva no localStorage quando tasks mudar
}, [tasks]);
```

#### Custom Hooks
```jsx
// Lógica reutilizável
function useTasks() {
  // Toda lógica das tarefas aqui
  return { tasks, addTask, deleteTask };
}
```

## ⚡ Vite

### O que é Vite?
- **Definição**: Ferramenta de build moderna e rápida
- **Criado por**: Evan You (criador do Vue.js)
- **Função**: Compila e serve a aplicação durante desenvolvimento

### Vantagens do Vite
- **Velocidade**: Start instantâneo do servidor
- **Hot Reload**: Atualiza mudanças sem recarregar página
- **Build otimizado**: Código final minificado e otimizado
- **Suporte moderno**: ES modules, TypeScript, CSS

### React + Vite
```bash
# Criar projeto React com Vite
npm create vite@latest meu-projeto -- --template react
```

## 🎨 Tailwind CSS

### O que é Tailwind?
- **Definição**: Framework CSS utility-first
- **Conceito**: Classes pequenas e específicas
- **Filosofia**: Compor estilos através de classes utilitárias

### Vantagens
- **Produtividade**: Estilização rápida
- **Consistência**: Design system integrado
- **Responsivo**: Classes para diferentes telas
- **Customizável**: Configuração flexível

### Exemplos de Classes
```html
<!-- Layout -->
<div class="flex justify-center items-center">

<!-- Espaçamento -->
<div class="p-4 m-2 gap-3">

<!-- Cores -->
<div class="bg-blue-500 text-white">

<!-- Responsividade -->
<div class="w-full md:w-1/2 lg:w-1/3">
```

### Classes Customizadas no Projeto
```css
/* Efeito vidro fosco */
.glass-effect {
  @apply backdrop-blur-sm bg-white/10 border border-white/20;
}

/* Botão com gradiente */
.btn-primary {
  @apply bg-gradient-to-r from-purple-500 to-pink-500;
}
```

## 📦 Bibliotecas Utilizadas

### React Router DOM
- **Função**: Navegação entre páginas (SPA)
- **Componentes principais**:
  - `BrowserRouter`: Habilita roteamento
  - `Routes`: Container de rotas
  - `Route`: Define uma rota
  - `Link`: Navegação sem recarregar

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
  </Routes>
</BrowserRouter>
```

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas
```
src/
├── components/     # Componentes reutilizáveis
├── hooks/         # Lógica customizada
├── pages/         # Páginas da aplicação
├── App.jsx        # Componente raiz
└── main.jsx       # Ponto de entrada
```

### Fluxo de Dados
```
App.jsx (roteamento)
  ↓
Home.jsx (página principal)
  ↓
useTasks.js (lógica de estado)
  ↓
TaskForm.jsx + TaskList.jsx (componentes)
  ↓
TaskItem.jsx (item individual)
```

## 💾 Persistência de Dados

### localStorage
- **O que é**: Armazenamento local do navegador
- **Função**: Salva dados entre sessões
- **Capacidade**: ~5-10MB por domínio
- **Uso no projeto**: Salvar lista de tarefas

```javascript
// Salvar dados
localStorage.setItem('tarefas', JSON.stringify(tasks));

// Recuperar dados
const saved = localStorage.getItem('tarefas');
const tasks = saved ? JSON.parse(saved) : [];
```

## 🎯 Padrões de Desenvolvimento

### Controlled Components
- **Conceito**: React controla o valor dos inputs
- **Vantagem**: Estado sempre sincronizado

```jsx
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

### Conditional Rendering
- **Conceito**: Renderizar baseado em condições
- **Uso**: Mostrar/ocultar elementos

```jsx
{isEditing ? (
  <input />
) : (
  <span>{task.text}</span>
)}
```

### Event Handling
- **Conceito**: Responder a ações do usuário
- **Eventos**: click, change, submit, keydown

```jsx
<button onClick={() => deleteTask(id)}>
  Deletar
</button>
```

## 🎨 Conceitos de Design

### Glass Morphism
- **Conceito**: Efeito de vidro fosco
- **Elementos**: Blur, transparência, bordas sutis
- **Tendência**: Design moderno e elegante

### Gradientes
- **Uso**: Fundos e textos coloridos
- **Tipos**: Linear, radial, cônico
- **No projeto**: Roxo para rosa

### Responsividade
- **Conceito**: Adaptar para diferentes telas
- **Breakpoints**: Mobile, tablet, desktop
- **Técnicas**: Flexbox, Grid, media queries

## 🔧 Ferramentas de Desenvolvimento

### npm (Node Package Manager)
- **Função**: Gerenciador de pacotes JavaScript
- **Comandos**:
  - `npm install`: Instala dependências
  - `npm run dev`: Inicia desenvolvimento
  - `npm run build`: Gera build de produção

### ESLint
- **Função**: Analisa código para encontrar problemas
- **Benefícios**: Código mais limpo e consistente

### Git
- **Função**: Controle de versão
- **Comandos básicos**: add, commit, push, pull

## 📱 Funcionalidades Modernas

### Single Page Application (SPA)
- **Conceito**: Uma página que muda conteúdo dinamicamente
- **Vantagem**: Navegação rápida, experiência fluida

### Progressive Web App (PWA) Ready
- **Conceito**: App web que funciona como nativo
- **Recursos**: Offline, notificações, instalável

### ES6+ Features
- **Arrow Functions**: `() => {}`
- **Destructuring**: `const { name } = object`
- **Template Literals**: `` `Hello ${name}` ``
- **Modules**: `import/export`

## 🎓 Conceitos para Aprender

### Iniciante
1. HTML básico
2. CSS básico
3. JavaScript ES6+
4. React componentes
5. Props e State

### Intermediário
1. Hooks (useState, useEffect)
2. Event handling
3. Conditional rendering
4. Tailwind CSS
5. React Router

### Avançado
1. Custom Hooks
2. Context API
3. Performance optimization
4. Testing
5. Deploy e CI/CD

## 📚 Recursos para Estudar

### Documentação Oficial
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

### Tutoriais Recomendados
- React Tutorial (react.dev)
- Tailwind CSS Crash Course
- JavaScript ES6+ Features
- Git e GitHub básico

---

**💡 Dica**: Este projeto é uma excelente base para aprender desenvolvimento web moderno. Cada tecnologia tem sua função específica e juntas criam uma aplicação robusta e moderna!