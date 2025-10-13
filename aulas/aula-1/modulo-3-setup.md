# ⚙️ Módulo 3 - Setup do Projeto
**Duração:** 60 minutos  
**Objetivo:** Configurar ambiente e estrutura inicial do projeto

## 🎯 O que você vai fazer

- Criar projeto React com Vite
- Instalar e configurar Tailwind CSS
- Configurar React Router
- Estruturar pastas do projeto
- Configurar estilos base

---

## 🚀 3.1 Criando o Projeto (15 minutos)

### Passo 1: Criar projeto com Vite

```bash
# Criar novo projeto React com Vite
npm create vite@latest todo-list -- --template react

# Entrar na pasta do projeto
cd todo-list

# Instalar dependências
npm install
```

### Passo 2: Testar o projeto

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` para ver o projeto funcionando.

### Passo 3: Limpar arquivos desnecessários

```bash
# Remover arquivos que não vamos usar
rm src/App.css
rm src/index.css
rm public/vite.svg
rm src/assets/react.svg
```

### Estrutura inicial:
```
todo-list/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── package.json
├── vite.config.js
└── index.html
```

---

## 🎨 3.2 Instalando Tailwind CSS (15 minutos)

### Passo 1: Instalar Tailwind CSS

```bash
# Instalar Tailwind CSS e plugin para Vite
npm install tailwindcss @tailwindcss/vite
```

### Passo 2: Configurar Vite

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
```

### Passo 3: Criar arquivo de estilos

```css
/* src/index.css */
@import "tailwindcss";

/* Estilos base */
@layer base {
  * {
    @apply transition-all duration-200 ease-in-out;
  }
  
  body {
    @apply bg-gradient-to-br from-slate-700 via-purple-900 to-slate-900;
    @apply min-h-screen font-sans;
  }
}

/* Componentes customizados */
@layer components {
  .glass-effect {
    @apply backdrop-blur-sm bg-white/10 border border-white/20;
  }
  
  .btn-primary {
    @apply bg-gradient-to-r from-purple-500 to-pink-500 
           hover:from-purple-600 hover:to-blue-600 
           text-white font-medium px-6 py-3 rounded-xl 
           shadow-lg hover:shadow-xl transform hover:scale-105;
  }
  
  .input-modern {
    @apply backdrop-blur-sm bg-white/10 border border-white/20 
           text-white placeholder-white/60 rounded-xl px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-purple-400 
           focus:border-transparent;
  }
}
```

### Passo 4: Importar estilos no main.jsx

```jsx
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Importar nossos estilos
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 🧭 3.3 Configurando React Router (15 minutos)

### Passo 1: Instalar React Router

```bash
npm install react-router-dom
```

### Passo 2: Configurar roteamento no App.jsx

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

## 📁 3.4 Estruturando o Projeto (15 minutos)

### Criar estrutura de pastas

```bash
# Criar pastas necessárias
mkdir src/components
mkdir src/pages
mkdir src/hooks
mkdir src/assets
```

### Estrutura final:
```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── TaskForm.jsx    # Formulário de tarefas
│   ├── TaskItem.jsx    # Item individual de tarefa
│   └── TaskList.jsx    # Lista de tarefas
├── hooks/              # Hooks customizados
│   └── useTasks.js     # Lógica de gerenciamento
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página principal
│   └── Sobre.jsx       # Página sobre
├── assets/             # Imagens e recursos
├── App.jsx             # Componente raiz
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

### Criar páginas básicas

```jsx
// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          ✨ ToDo List
        </h1>
        <p className="text-white/80 text-center">
          Página principal em construção...
        </p>
      </div>
    </div>
  )
}
```

```jsx
// src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          📖 Sobre
        </h1>
        <div className="glass-effect p-6 rounded-xl">
          <p className="text-white/80 mb-4">
            Este é um projeto de ToDo List desenvolvido com:
          </p>
          <ul className="text-white/70 space-y-2">
            <li>• React 19</li>
            <li>• Vite</li>
            <li>• Tailwind CSS</li>
            <li>• React Router</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
```

---

## ✅ 3.5 Testando a Configuração (10 minutos)

### Verificar se tudo está funcionando

```bash
# Iniciar o servidor
npm run dev
```

### Checklist de verificação:

- [ ] Projeto inicia sem erros
- [ ] Tailwind CSS está funcionando (gradiente de fundo visível)
- [ ] Navegação entre páginas funciona
- [ ] Classes glass-effect aplicadas corretamente
- [ ] Responsividade básica funcionando

### Teste das classes customizadas

Adicione este código temporário na página Home para testar:

```jsx
// Teste temporário - adicionar na Home.jsx
<div className="space-y-4">
  {/* Teste glass-effect */}
  <div className="glass-effect p-4 rounded-xl">
    <p className="text-white">Efeito glass funcionando!</p>
  </div>
  
  {/* Teste botão */}
  <button className="btn-primary">
    Botão de teste
  </button>
  
  {/* Teste input */}
  <input 
    className="input-modern w-full" 
    placeholder="Input de teste..."
  />
</div>
```

### Resultado esperado:
- Fundo com gradiente roxo/cinza
- Card com efeito glass (transparente com blur)
- Botão com gradiente roxo-rosa e hover effect
- Input com estilo glass e foco roxo

---

## 🔧 3.6 Scripts e Configurações Finais (5 minutos)

### Scripts disponíveis no package.json:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

### Comandos úteis:

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar código
npm run lint
```

### Configuração do index.html:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>✨ ToDo List - React + Vite</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 🎯 Exercício Prático (10 minutos)

### Desafio: Criar um componente de teste

Crie um arquivo `src/components/TestCard.jsx`:

```jsx
// src/components/TestCard.jsx
export default function TestCard({ title, children }) {
  return (
    <div className="glass-effect p-6 rounded-xl mb-4 hover:scale-105">
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>
      <div className="text-white/80">
        {children}
      </div>
    </div>
  )
}
```

Use na página Home:

```jsx
// Adicionar na Home.jsx
import TestCard from '../components/TestCard'

// Dentro do componente
<TestCard title="🚀 Setup Completo">
  <p>Projeto configurado com sucesso!</p>
  <ul className="mt-2 space-y-1">
    <li>✅ React + Vite</li>
    <li>✅ Tailwind CSS</li>
    <li>✅ React Router</li>
    <li>✅ Estrutura de pastas</li>
  </ul>
</TestCard>
```

---

## 📝 Resumo do Módulo

### O que foi configurado:
- ✅ **Projeto React** com Vite
- ✅ **Tailwind CSS** com classes customizadas
- ✅ **React Router** para navegação
- ✅ **Estrutura de pastas** organizada
- ✅ **Estilos base** com glass morphism

### Arquivos criados:
- `vite.config.js` - Configuração do Vite
- `src/index.css` - Estilos globais e componentes
- `src/pages/Home.jsx` - Página principal
- `src/pages/Sobre.jsx` - Página sobre
- Estrutura de pastas completa

### Próximos Passos:
- Criar componente Header
- Implementar navegação
- Adicionar mais estilos glass morphism

---

**Próximo módulo:** [Módulo 4 - Primeiros Componentes](./modulo-4-componentes.md)