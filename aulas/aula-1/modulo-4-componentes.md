# 🧩 Módulo 4 - Primeiros Componentes
**Duração:** 60 minutos  
**Objetivo:** Criar componentes base com glass morphism

## 🎯 O que você vai criar

- Componente Header com navegação
- Estilos glass morphism avançados
- Layout responsivo
- Navegação funcional

---

## 🎨 4.1 Componente Header (30 minutos)

### Passo 1: Criar o componente Header

```jsx
// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  
  return (
    <header className="glass-effect p-4 mb-8 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo/Título */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">✨</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            ToDo List
          </h1>
        </div>
        
        {/* Navegação */}
        <nav className="flex gap-2">
          <NavLink 
            to="/" 
            isActive={location.pathname === '/'}
          >
            🏠 Home
          </NavLink>
          <NavLink 
            to="/sobre" 
            isActive={location.pathname === '/sobre'}
          >
            📖 Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

// Componente auxiliar para links de navegação
function NavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className={`
        px-4 py-2 rounded-lg font-medium transition-all
        ${isActive 
          ? 'bg-white/20 text-white shadow-lg' 
          : 'text-white/80 hover:text-white hover:bg-white/10'
        }
      `}
    >
      {children}
    </Link>
  )
}
```

### Passo 2: Atualizar as páginas para usar o Header

```jsx
// src/pages/Home.jsx
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            🎯 Suas Tarefas
          </h2>
          <p className="text-white/80 mb-8">
            Organize sua vida de forma simples e elegante
          </p>
          
          {/* Placeholder para futuro conteúdo */}
          <div className="glass-effect p-8 rounded-xl">
            <p className="text-white/60">
              📝 Em breve: formulário de tarefas aqui
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

```jsx
// src/pages/Sobre.jsx
import Header from '../components/Header'

export default function Sobre() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            📖 Sobre o Projeto
          </h2>
          
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">
              🚀 Tecnologias Utilizadas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TechCard 
                icon="⚛️" 
                name="React 19" 
                description="Biblioteca para UI"
              />
              <TechCard 
                icon="⚡" 
                name="Vite" 
                description="Build tool moderna"
              />
              <TechCard 
                icon="🎨" 
                name="Tailwind CSS" 
                description="Framework CSS"
              />
              <TechCard 
                icon="🧭" 
                name="React Router" 
                description="Navegação SPA"
              />
            </div>
          </div>
          
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">
              ✨ Funcionalidades
            </h3>
            <ul className="text-white/80 space-y-2">
              <li>• ✅ Adicionar e remover tarefas</li>
              <li>• ✏️ Editar tarefas existentes</li>
              <li>• 🔍 Buscar e filtrar tarefas</li>
              <li>• 💾 Persistência no localStorage</li>
              <li>• 📱 Design responsivo</li>
              <li>• 🎨 Interface glass morphism</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente auxiliar para cards de tecnologia
function TechCard({ icon, name, description }) {
  return (
    <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h4 className="font-bold text-white">{name}</h4>
      </div>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  )
}
```

---

## 🎨 4.2 Estilos Glass Morphism Avançados (20 minutos)

### Atualizar o arquivo de estilos

```css
/* src/index.css */
@import "tailwindcss";

@layer base {
  * {
    @apply transition-all duration-200 ease-in-out;
  }
  
  body {
    @apply bg-gradient-to-br from-slate-700 via-purple-900 to-slate-900;
    @apply min-h-screen font-sans antialiased;
  }
  
  /* Scrollbar customizada */
  ::-webkit-scrollbar {
    @apply w-2;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-white/5 rounded-full;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-gradient-to-b from-purple-500 to-pink-500 rounded-full;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply from-purple-400 to-pink-400;
  }
}

@layer components {
  /* Efeito glass básico */
  .glass-effect {
    @apply backdrop-blur-sm bg-white/10 border border-white/20;
  }
  
  /* Variações do glass effect */
  .glass-light {
    @apply backdrop-blur-sm bg-white/5 border border-white/10;
  }
  
  .glass-strong {
    @apply backdrop-blur-md bg-white/15 border border-white/30;
  }
  
  /* Botões */
  .btn-primary {
    @apply bg-gradient-to-r from-purple-500 to-pink-500 
           hover:from-purple-600 hover:to-blue-600 
           text-white font-medium px-6 py-3 rounded-xl 
           shadow-lg hover:shadow-xl transform hover:scale-105
           focus:outline-none focus:ring-2 focus:ring-purple-400;
  }
  
  .btn-secondary {
    @apply glass-effect text-white font-medium px-6 py-3 rounded-xl
           hover:bg-white/20 transform hover:scale-105
           focus:outline-none focus:ring-2 focus:ring-white/50;
  }
  
  .btn-icon {
    @apply glass-light p-2 rounded-lg hover:bg-white/20 
           transform hover:scale-110 focus:outline-none;
  }
  
  /* Inputs */
  .input-modern {
    @apply backdrop-blur-sm bg-white/10 border border-white/20 
           text-white placeholder-white/60 rounded-xl px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-purple-400 
           focus:border-transparent focus:bg-white/15;
  }
  
  /* Cards e containers */
  .card {
    @apply glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl
           transform hover:scale-[1.02] transition-all duration-300;
  }
  
  .card-hover {
    @apply hover:bg-white/15 hover:border-white/30;
  }
  
  /* Animações */
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .slide-up {
    animation: slideUp 0.3s ease-out;
  }
  
  .bounce-in {
    animation: bounceIn 0.6s ease-out;
  }
}

/* Keyframes para animações */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes bounceIn {
  0% { 
    opacity: 0; 
    transform: scale(0.3); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.05); 
  }
  70% { 
    transform: scale(0.9); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Responsividade customizada */
@layer utilities {
  .container-custom {
    @apply max-w-2xl mx-auto px-4;
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent;
  }
  
  .border-gradient {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
    border: 1px solid transparent;
    background-clip: padding-box;
  }
}
```

---

## 📱 4.3 Layout Responsivo (10 minutos)

### Criar componente Container reutilizável

```jsx
// src/components/Container.jsx
export default function Container({ children, size = 'md', className = '' }) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  }
  
  return (
    <div className={`${sizes[size]} mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}
```

### Atualizar páginas para usar Container

```jsx
// src/pages/Home.jsx - versão atualizada
import Header from '../components/Header'
import Container from '../components/Container'

export default function Home() {
  return (
    <div className="min-h-screen p-4 fade-in">
      <Container>
        <Header />
        
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            🎯 Suas Tarefas
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Organize sua vida de forma simples e elegante
          </p>
          
          {/* Preview do que vem por aí */}
          <div className="grid gap-6 md:grid-cols-2">
            <PreviewCard 
              icon="📝" 
              title="Adicionar Tarefas"
              description="Interface intuitiva para criar novas tarefas"
            />
            <PreviewCard 
              icon="✏️" 
              title="Editar Inline"
              description="Edite tarefas com duplo clique"
            />
            <PreviewCard 
              icon="🔍" 
              title="Busca Inteligente"
              description="Encontre tarefas rapidamente"
            />
            <PreviewCard 
              icon="💾" 
              title="Auto Save"
              description="Dados salvos automaticamente"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

function PreviewCard({ icon, title, description }) {
  return (
    <div className="card card-hover slide-up">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
```

---

## 🎯 Exercício Prático (15 minutos)

### Desafio: Criar um componente Button reutilizável

```jsx
// src/components/Button.jsx
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) {
  const baseClasses = 'font-medium rounded-xl transition-all focus:outline-none'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    icon: 'btn-icon'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${variant !== 'icon' ? sizes[size] : ''} 
        ${className}
      `}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}
```

### Teste o componente:

```jsx
// Adicionar na Home.jsx para testar
import Button from '../components/Button'

// Dentro do componente
<div className="flex flex-wrap gap-4 justify-center mt-8">
  <Button variant="primary" icon="➕">
    Adicionar Tarefa
  </Button>
  <Button variant="secondary" icon="🔍">
    Buscar
  </Button>
  <Button variant="icon" size="sm">
    ⚙️
  </Button>
</div>
```

---

## ✅ 4.4 Verificação Final (5 minutos)

### Checklist do que foi criado:

- [ ] ✅ Componente Header com navegação
- [ ] ✅ Estilos glass morphism avançados
- [ ] ✅ Layout responsivo
- [ ] ✅ Animações CSS
- [ ] ✅ Componentes reutilizáveis
- [ ] ✅ Navegação funcional

### Teste final:

1. **Navegação**: Clique entre Home e Sobre
2. **Responsividade**: Redimensione a janela
3. **Hover effects**: Passe o mouse sobre elementos
4. **Glass morphism**: Verifique transparências
5. **Animações**: Observe transições suaves

### Estrutura atual:

```
src/
├── components/
│   ├── Header.jsx      ✅ Criado
│   ├── Container.jsx   ✅ Criado
│   └── Button.jsx      ✅ Criado
├── pages/
│   ├── Home.jsx        ✅ Atualizado
│   └── Sobre.jsx       ✅ Atualizado
├── App.jsx             ✅ Configurado
├── index.css           ✅ Estilos completos
└── main.jsx            ✅ Configurado
```

---

## 📝 Resumo do Módulo

### Componentes criados:
- ✅ **Header**: Navegação com glass morphism
- ✅ **Container**: Layout responsivo reutilizável
- ✅ **Button**: Botão com variantes e ícones

### Estilos implementados:
- ✅ **Glass morphism**: Múltiplas variações
- ✅ **Animações**: Fade, slide, bounce
- ✅ **Responsividade**: Mobile-first design
- ✅ **Gradientes**: Texto e backgrounds

### Funcionalidades:
- ✅ **Navegação**: React Router funcional
- ✅ **Layout**: Responsivo e moderno
- ✅ **Interatividade**: Hover e focus states

---

## 🎉 Fim da Aula 1

### O que você conquistou:
- ✅ Domínio dos conceitos fundamentais
- ✅ Projeto configurado e funcionando
- ✅ Interface moderna com glass morphism
- ✅ Base sólida para desenvolvimento

### Próxima aula:
Na **Aula 2**, vamos implementar:
- Hook customizado para gerenciar tarefas
- Formulário de adição de tarefas
- Lista de tarefas com CRUD completo
- Funcionalidades avançadas (busca, edição, persistência)

---

**Próxima aula:** [Aula 2 - Desenvolvimento Completo](../aula-2/README.md)