# 📖 Módulo 1 - Conceitos Fundamentais
**Duração:** 60 minutos  
**Objetivo:** Compreender React, Vite e Tailwind CSS

## 🎯 O que você vai aprender

- O que é React e por que usar
- Vite como build tool moderna
- Tailwind CSS e utility-first approach
- Diferenças entre biblioteca vs framework

---

## 🔵 1.1 O que é React? (20 minutos)

### Definição
React é uma **biblioteca JavaScript** para construir interfaces de usuário, criada pelo Facebook em 2013.

### Características Principais

#### **Biblioteca vs Framework**
```
Biblioteca (React):
- Você chama a biblioteca
- Mais flexibilidade
- Foco específico (UI)

Framework (Angular):
- Framework chama seu código
- Mais opiniões/regras
- Solução completa
```

#### **Virtual DOM**
```jsx
// DOM Real (lento)
document.getElementById('title').innerHTML = 'Novo Título';

// Virtual DOM (rápido)
const element = <h1>Novo Título</h1>;
// React calcula diferenças e atualiza apenas o necessário
```

#### **Component-Based Architecture**
```jsx
// Componente reutilizável
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

// Uso em diferentes lugares
<Button text="Salvar" onClick={handleSave} />
<Button text="Cancelar" onClick={handleCancel} />
```

#### **Declarative Programming**
```jsx
// Imperativo (como fazer)
const button = document.createElement('button');
button.textContent = 'Clique aqui';
button.addEventListener('click', handleClick);
document.body.appendChild(button);

// Declarativo (o que queremos)
<button onClick={handleClick}>Clique aqui</button>
```

### Vantagens do React
- ✅ Reutilização de componentes
- ✅ Performance otimizada (Virtual DOM)
- ✅ Ecossistema rico
- ✅ Comunidade ativa
- ✅ Suporte do Facebook/Meta

---

## ⚡ 1.2 O que é Vite? (20 minutos)

### Definição
Vite é uma **build tool** moderna que oferece desenvolvimento rápido e builds otimizados.

### Vite vs Webpack

| Aspecto | Vite | Webpack |
|---------|------|---------|
| **Velocidade dev** | ⚡ Muito rápido | 🐌 Mais lento |
| **Hot Reload** | Instantâneo | Alguns segundos |
| **Configuração** | Mínima | Complexa |
| **Bundle** | ESBuild + Rollup | Webpack |

### Características do Vite

#### **Hot Module Replacement (HMR)**
```jsx
// Mudança no código
function App() {
  return <h1>Hello World!</h1>; // Alteração reflete instantaneamente
}
```

#### **Build Otimizado**
```bash
# Desenvolvimento (rápido)
npm run dev

# Produção (otimizado)
npm run build
```

#### **Suporte Nativo**
- TypeScript
- JSX
- CSS Modules
- PostCSS
- Sass/Less

### Por que usar Vite?
- ✅ Desenvolvimento mais rápido
- ✅ Configuração mínima
- ✅ Build moderno e otimizado
- ✅ Suporte a múltiplas tecnologias

---

## 🎨 1.3 O que é Tailwind CSS? (20 minutos)

### Definição
Tailwind CSS é um **framework CSS utility-first** que fornece classes utilitárias de baixo nível.

### Utility-First vs CSS Tradicional

#### **CSS Tradicional**
```css
/* styles.css */
.card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
```

```html
<div class="card">
  <button class="button">Clique aqui</button>
</div>
```

#### **Tailwind CSS (Utility-First)**
```html
<div class="bg-white rounded-lg p-4 shadow-md">
  <button class="bg-blue-500 text-white px-4 py-2 rounded">
    Clique aqui
  </button>
</div>
```

### Vantagens do Tailwind

#### **1. Desenvolvimento Rápido**
```html
<!-- Sem sair do HTML -->
<div class="flex items-center justify-between p-4 bg-gray-100">
  <h1 class="text-2xl font-bold text-gray-800">Título</h1>
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Botão
  </button>
</div>
```

#### **2. Consistência de Design**
```html
<!-- Sistema de espaçamento consistente -->
<div class="p-4">    <!-- 16px -->
<div class="p-6">    <!-- 24px -->
<div class="p-8">    <!-- 32px -->

<!-- Sistema de cores consistente -->
<div class="bg-blue-500">   <!-- Azul padrão -->
<div class="bg-blue-600">   <!-- Azul mais escuro -->
<div class="bg-blue-400">   <!-- Azul mais claro -->
```

#### **3. Responsividade Fácil**
```html
<!-- Mobile first + breakpoints -->
<div class="text-sm md:text-lg lg:text-xl">
  Texto responsivo
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Grid responsivo
</div>
```

#### **4. Customização Flexível**
```css
/* Pode criar classes customizadas quando necessário */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded;
  }
}
```

### Sistema de Design Integrado

#### **Espaçamento**
```html
<!-- Padding -->
<div class="p-0">   <!-- 0px -->
<div class="p-1">   <!-- 4px -->
<div class="p-2">   <!-- 8px -->
<div class="p-4">   <!-- 16px -->
<div class="p-8">   <!-- 32px -->

<!-- Margin -->
<div class="m-4">   <!-- margin: 16px -->
<div class="mx-4">  <!-- margin-left/right: 16px -->
<div class="my-4">  <!-- margin-top/bottom: 16px -->
```

#### **Cores**
```html
<!-- Texto -->
<p class="text-gray-900">Texto escuro</p>
<p class="text-gray-500">Texto médio</p>
<p class="text-gray-300">Texto claro</p>

<!-- Background -->
<div class="bg-red-500">Fundo vermelho</div>
<div class="bg-green-500">Fundo verde</div>
<div class="bg-blue-500">Fundo azul</div>
```

### Por que usar Tailwind?
- ✅ Desenvolvimento mais rápido
- ✅ CSS menor em produção
- ✅ Consistência automática
- ✅ Responsividade fácil
- ✅ Customização flexível

---

## 🎯 Exercício Prático (15 minutos)

### Crie um card simples com Tailwind:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
  
  <!-- Seu desafio: criar este card -->
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        Meu Primeiro Card
      </h2>
      <p class="text-gray-600 mb-4">
        Este é um exemplo de card criado com Tailwind CSS.
      </p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Saiba Mais
      </button>
    </div>
  </div>

</body>
</html>
```

### Desafio Extra:
Modifique o card para ser responsivo:
- Mobile: largura total
- Desktop: largura máxima de 400px

---

## 📝 Resumo do Módulo

### Conceitos Aprendidos:
- ✅ **React**: Biblioteca para UI com Virtual DOM
- ✅ **Vite**: Build tool rápida e moderna
- ✅ **Tailwind**: Framework CSS utility-first

### Próximos Passos:
- Aplicar estes conceitos em Design Systems
- Entender Atomic Design
- Começar a construir nosso projeto

---

**Próximo módulo:** [Módulo 2 - Design System e Atomic Design](./modulo-2-design.md)