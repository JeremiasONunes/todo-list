# 🎨 Módulo 2 - Design System e Atomic Design
**Duração:** 60 minutos  
**Objetivo:** Compreender Design Systems e metodologia Atomic Design

## 🎯 O que você vai aprender

- Conceitos de Design System
- Metodologia Atomic Design
- Tokens de design
- Aplicação prática no projeto ToDo

---

## 🎨 2.1 Design System (30 minutos)

### O que é um Design System?

Um **Design System** é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser montados para construir aplicações.

### Componentes de um Design System

#### **1. Tokens de Design**
```css
/* Cores */
:root {
  --primary-500: #8B5CF6;    /* Roxo principal */
  --primary-600: #7C3AED;    /* Roxo escuro */
  --secondary-500: #EC4899;  /* Rosa */
  --gray-900: #111827;       /* Cinza escuro */
  --white: #FFFFFF;
}

/* Espaçamentos */
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}

/* Tipografia */
:root {
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
}
```

#### **2. Componentes Base**
```jsx
// Button Component
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseClasses = 'font-medium rounded-xl transition-all';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

#### **3. Padrões de Layout**
```jsx
// Container Pattern
function Container({ children, size = 'md' }) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  };
  
  return (
    <div className={`${sizes[size]} mx-auto px-4`}>
      {children}
    </div>
  );
}

// Card Pattern
function Card({ children, className = '' }) {
  return (
    <div className={`glass-effect p-6 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}
```

### Vantagens do Design System

#### **Consistência Visual**
```jsx
// Todos os botões seguem o mesmo padrão
<Button variant="primary">Salvar</Button>
<Button variant="secondary">Cancelar</Button>

// Todos os cards têm o mesmo estilo
<Card>Conteúdo 1</Card>
<Card>Conteúdo 2</Card>
```

#### **Desenvolvimento Mais Rápido**
```jsx
// Reutilização de componentes
function TodoForm() {
  return (
    <Card>
      <Input placeholder="Nova tarefa..." />
      <Button variant="primary">Adicionar</Button>
    </Card>
  );
}
```

#### **Manutenção Facilitada**
```css
/* Mudança em um lugar afeta toda a aplicação */
.btn-primary {
  /* Alterar aqui muda todos os botões primários */
  @apply bg-gradient-to-r from-blue-500 to-purple-500;
}
```

### Design System do Projeto ToDo

#### **Paleta de Cores**
```css
/* Cores Principais */
Primary: #8B5CF6 → #EC4899 (Gradiente roxo-rosa)
Background: Gradiente cinza escuro → roxo → cinza
Text: Branco com variações de opacidade
Accent: Azul (#3B82F6) para editar, Vermelho (#EF4444) para deletar

/* Aplicação no Tailwind */
bg-gradient-to-r from-purple-500 to-pink-500
bg-gradient-to-br from-slate-700 via-purple-900 to-slate-900
text-white text-white/80 text-white/60
text-blue-400 text-red-400
```

#### **Efeitos Visuais**
```css
/* Glass Morphism */
.glass-effect {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Animações */
.hover-scale {
  transform: scale(1);
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## ⚛️ 2.2 Atomic Design (30 minutos)

### Metodologia Atomic Design

Criada por Brad Frost, divide a interface em 5 níveis hierárquicos, inspirados na química.

### Os 5 Níveis

#### **1. Átomos** 
Elementos básicos e indivisíveis da interface.

```jsx
// Exemplos de Átomos
function Icon({ name, size = 16 }) {
  return <span className={`text-${size}px`}>{name}</span>;
}

function Input({ type = 'text', placeholder, ...props }) {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      className="input-modern"
      {...props}
    />
  );
}

function Checkbox({ checked, onChange, ...props }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 accent-purple-500 rounded"
      {...props}
    />
  );
}
```

#### **2. Moléculas**
Combinação de átomos que formam componentes funcionais.

```jsx
// Molécula: Campo de Input com Label
function InputField({ label, error, ...inputProps }) {
  return (
    <div className="mb-4">
      <label className="block text-white/80 mb-2">
        {label}
      </label>
      <Input {...inputProps} />
      {error && (
        <span className="text-red-400 text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
}

// Molécula: Botão com Ícone
function IconButton({ icon, children, ...props }) {
  return (
    <Button {...props}>
      <Icon name={icon} />
      {children}
    </Button>
  );
}
```

#### **3. Organismos**
Grupos de moléculas que formam seções da interface.

```jsx
// Organismo: Header da aplicação
function Header() {
  return (
    <header className="glass-effect p-4 mb-8">
      <div className="flex justify-between items-center">
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
}

// Organismo: Lista de Tarefas
function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
```

#### **4. Templates**
Estruturas de página que definem o layout.

```jsx
// Template: Layout principal
function MainTemplate({ header, sidebar, content, footer }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {header}
        <div className="flex gap-8">
          {sidebar && (
            <aside className="w-64">
              {sidebar}
            </aside>
          )}
          <main className="flex-1">
            {content}
          </main>
        </div>
        {footer}
      </div>
    </div>
  );
}
```

#### **5. Pages**
Instâncias específicas dos templates com conteúdo real.

```jsx
// Page: Página Home
function HomePage() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks();
  
  return (
    <MainTemplate
      header={<Header />}
      content={
        <>
          <TaskForm onAddTask={addTask} />
          <SearchBar />
          <TaskList 
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </>
      }
    />
  );
}
```

### Aplicação no Projeto ToDo

#### **Estrutura Atomic Design**
```
Átomos:
├── Icon (✏️, ❌, ✓)
├── Input (text, checkbox)
├── Button
└── Text

Moléculas:
├── TaskItem (checkbox + text + buttons)
├── TaskForm (input + button)
└── SearchBar (input + icon)

Organismos:
├── Header (logo + navigation)
├── TaskList (múltiplos TaskItem)
└── Footer

Templates:
└── MainLayout (header + content + footer)

Pages:
├── HomePage (TaskForm + TaskList)
└── AboutPage (informações)
```

### Vantagens do Atomic Design

#### **1. Reutilização Máxima**
```jsx
// Átomo Button usado em várias moléculas
<TaskForm>
  <Button>Adicionar</Button>  {/* Na molécula TaskForm */}
</TaskForm>

<TaskItem>
  <Button>Editar</Button>     {/* Na molécula TaskItem */}
  <Button>Deletar</Button>
</TaskItem>
```

#### **2. Manutenção Facilitada**
```jsx
// Mudança no átomo afeta todos os usos
function Button({ children, ...props }) {
  return (
    <button 
      className="btn-primary hover:scale-105" // Mudança aqui afeta tudo
      {...props}
    >
      {children}
    </button>
  );
}
```

#### **3. Testabilidade**
```jsx
// Testes isolados por nível
describe('Átomo: Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

describe('Molécula: TaskItem', () => {
  it('should toggle task when checkbox is clicked', () => {
    // Teste da funcionalidade da molécula
  });
});
```

---

## 🎯 Exercício Prático (15 minutos)

### Identifique os componentes do nosso ToDo:

```jsx
// Analise esta interface e identifique:
// - Quais são os átomos?
// - Quais são as moléculas?
// - Qual é o organismo?

function TodoApp() {
  return (
    <div className="container">
      {/* Header */}
      <header className="glass-effect p-4">
        <h1 className="text-2xl font-bold">✨ ToDo List</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
        </nav>
      </header>
      
      {/* Task Form */}
      <form className="glass-effect p-6">
        <input 
          type="text" 
          placeholder="Nova tarefa..."
          className="input-modern"
        />
        <button className="btn-primary">
          Adicionar
        </button>
      </form>
      
      {/* Task List */}
      <div className="space-y-3">
        <div className="glass-effect p-4">
          <input type="checkbox" />
          <span>Estudar React</span>
          <button>✏️</button>
          <button>❌</button>
        </div>
      </div>
    </div>
  );
}
```

### Resposta:
```
Átomos:
- input (text, checkbox)
- button
- span (texto)
- h1
- a (links)

Moléculas:
- TaskItem (checkbox + span + buttons)
- TaskForm (input + button)
- Navigation (múltiplos links)

Organismos:
- Header (h1 + Navigation)
- TaskList (múltiplos TaskItem)
```

---

## 📝 Resumo do Módulo

### Conceitos Aprendidos:
- ✅ **Design System**: Tokens, componentes e padrões
- ✅ **Atomic Design**: 5 níveis hierárquicos
- ✅ **Aplicação prática**: Estrutura do projeto ToDo

### Benefícios:
- Consistência visual
- Reutilização de código
- Manutenção facilitada
- Desenvolvimento mais rápido

### Próximos Passos:
- Aplicar estes conceitos no setup do projeto
- Criar a estrutura de pastas
- Implementar os primeiros componentes

---

**Próximo módulo:** [Módulo 3 - Setup do Projeto](./modulo-3-setup.md)