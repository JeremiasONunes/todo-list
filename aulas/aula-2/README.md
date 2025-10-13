# 📚 Aula 2 - Desenvolvimento Completo
**Duração:** 4 horas  
**Foco:** Implementação completa da funcionalidade ToDo

## 🎯 Objetivos da Aula

- Criar hook customizado para gerenciar estado
- Implementar formulário de tarefas
- Desenvolver lista de tarefas com CRUD
- Adicionar funcionalidades avançadas (busca, edição, persistência)

## ⏰ Cronograma

| Tempo | Módulo | Conteúdo |
|-------|--------|----------|
| 0-60min | [Módulo 1](./modulo-1-hooks.md) | Hook Customizado (useTasks) |
| 60-120min | [Módulo 2](./modulo-2-forms.md) | Componentes de Formulário |
| 120-180min | [Módulo 3](./modulo-3-listas.md) | Lista e Itens de Tarefas |
| 180-240min | [Módulo 4](./modulo-4-integracao.md) | Integração e Funcionalidades Avançadas |

## 📋 Checklist da Aula

### Ao final desta aula, você deve ter:

- [ ] Hook useTasks funcionando com localStorage
- [ ] Formulário para adicionar tarefas
- [ ] Lista de tarefas com renderização condicional
- [ ] Funcionalidade de edição inline
- [ ] Sistema de busca e filtros
- [ ] Persistência completa de dados
- [ ] Interface totalmente funcional

## 🚀 Pré-requisitos

### Certifique-se de ter concluído a Aula 1:
- ✅ Projeto configurado (React + Vite + Tailwind)
- ✅ Componente Header criado
- ✅ Navegação funcionando
- ✅ Estilos glass morphism implementados

### Estrutura esperada:
```
src/
├── components/
│   ├── Header.jsx
│   ├── Container.jsx
│   └── Button.jsx
├── pages/
│   ├── Home.jsx
│   └── Sobre.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 📖 Conceitos React que serão abordados

### Hooks Avançados
- **useState** com lazy initialization
- **useEffect** para side effects
- **Custom Hooks** para lógica reutilizável

### Padrões de Desenvolvimento
- **Controlled Components** para formulários
- **Conditional Rendering** para estados vazios
- **Event Handling** avançado
- **Immutability** patterns
- **Component Composition**

### Funcionalidades Modernas
- **Local Storage** para persistência
- **Real-time Search** com debounce
- **Keyboard Shortcuts** (Enter, Escape)
- **Inline Editing** com duplo clique
- **Optimistic Updates**

## 🎯 Resultado Final

Ao final da Aula 2, você terá uma aplicação ToDo completa com:

```
Funcionalidades:
├── ✅ Adicionar tarefas
├── ✏️ Editar tarefas (duplo clique)
├── ❌ Deletar tarefas
├── ✔️ Marcar como concluída
├── 🔍 Buscar tarefas (mín. 3 chars)
├── 💾 Persistência automática
├── 📱 Design responsivo
└── 🎨 Animações suaves
```

**Interface visual:**
- Formulário de adição elegante
- Lista de tarefas com hover effects
- Edição inline intuitiva
- Busca em tempo real
- Estados vazios informativos
- Feedback visual para ações

## 📚 Material de Apoio

- [React Hooks Documentation](https://react.dev/reference/react)
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Event Handling in React](https://react.dev/learn/responding-to-events)
- [Controlled Components](https://react.dev/reference/react-dom/components/input)

## 🎨 Design Patterns

### Estado da Aplicação
```jsx
// Estrutura do estado das tarefas
const task = {
  id: 1640995200000,        // timestamp único
  text: "Estudar React",    // texto da tarefa
  completed: false          // status de conclusão
}

const tasks = [task1, task2, task3] // array de tarefas
```

### Fluxo de Dados
```
useTasks Hook
    ↓
Home Page
    ↓
TaskForm + TaskList
    ↓
TaskItem (individual)
```

---

**Vamos começar:** [Módulo 1 - Hook Customizado](./modulo-1-hooks.md)