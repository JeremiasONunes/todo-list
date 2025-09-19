# ✨ ToDo List - React + Vite

Uma aplicação moderna de lista de tarefas desenvolvida com React, Vite e Tailwind CSS, featuring design glass morphism e funcionalidades completas de CRUD.

## 🚀 Funcionalidades

- ✅ **Adicionar tarefas** - Crie novas tarefas rapidamente
- ✏️ **Editar tarefas** - Duplo clique ou botão de editar
- ❌ **Deletar tarefas** - Remove tarefas indesejadas
- ✔️ **Marcar como concluída** - Toggle de status das tarefas
- 🔍 **Buscar tarefas** - Filtro por texto (mínimo 3 caracteres)
- 💾 **Persistência local** - Dados salvos no localStorage
- 📱 **Design responsivo** - Funciona em desktop e mobile
- 🎨 **Interface moderna** - Glass morphism e gradientes

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navegação entre páginas
- **JavaScript ES6+** - Sintaxe moderna

## 🎨 Design Features

- **Glass Morphism** - Efeito vidro fosco nos cards
- **Gradientes** - Cores roxo/rosa modernas
- **Animações suaves** - Transições e hover effects
- **Tipografia elegante** - Hierarquia visual clara
- **Ícones e emojis** - Interface amigável

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── header.jsx      # Cabeçalho com navegação
│   ├── Taskform.jsx    # Formulário de adicionar tarefa
│   ├── TaskItem.jsx    # Item individual de tarefa
│   └── Tasklist.jsx    # Lista de tarefas
├── hooks/              # Hooks customizados
│   └── useTasks.js     # Lógica de gerenciamento de tarefas
├── pages/              # Páginas da aplicação
│   ├── home.jsx        # Página principal
│   └── sobre.jsx       # Página sobre
├── App.jsx             # Componente raiz com roteamento
├── index.css           # Estilos globais e classes customizadas
└── main.jsx            # Ponto de entrada da aplicação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd todo-list
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

## 📚 Conceitos React Demonstrados

### Hooks Utilizados
- **useState** - Gerenciamento de estado local
- **useEffect** - Efeitos colaterais e persistência
- **Custom Hook (useTasks)** - Lógica reutilizável

### Padrões e Técnicas
- **Controlled Components** - Inputs controlados pelo React
- **Conditional Rendering** - Renderização baseada em condições
- **Event Handling** - Manipulação de eventos
- **Props Drilling** - Passagem de dados entre componentes
- **Component Composition** - Composição de componentes

### Funcionalidades Avançadas
- **Local Storage** - Persistência de dados no navegador
- **Search/Filter** - Filtro em tempo real
- **Keyboard Shortcuts** - Enter para salvar, Escape para cancelar
- **Responsive Design** - Layout adaptável

## 🎯 Funcionalidades Detalhadas

### Gerenciamento de Tarefas
- **Adicionar**: Digite no campo e pressione Enter ou clique em "Adicionar"
- **Editar**: Duplo clique no texto da tarefa ou use o botão de editar
- **Concluir**: Marque o checkbox para riscar a tarefa
- **Deletar**: Use o botão de lixeira que aparece no hover

### Busca e Filtro
- Digite pelo menos 3 caracteres para ativar o filtro
- Busca case-insensitive no texto das tarefas
- Resultados em tempo real

### Persistência
- Dados salvos automaticamente no localStorage
- Tarefas mantidas entre sessões do navegador
- Não requer banco de dados ou servidor

## 🎨 Customização CSS

### Classes Customizadas
- `.glass-effect` - Efeito vidro fosco
- `.btn-primary` - Botão com gradiente e animações
- `.input-modern` - Input com estilo glass morphism

### Paleta de Cores
- **Primária**: Roxo (#8B5CF6) → Rosa (#EC4899)
- **Fundo**: Gradiente cinza escuro → roxo → cinza
- **Texto**: Branco com variações de opacidade
- **Acentos**: Azul para editar, vermelho para deletar

## 📱 Responsividade

- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints** - Adaptação para tablet e desktop
- **Touch Friendly** - Botões e áreas de toque adequadas
- **Flexible Layout** - Grid e flexbox responsivos

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 📄 Licença

Este projeto está sob a **Licença MIT** - veja os detalhes abaixo:

### MIT License

Copyright (c) 2024 Jeremias O Nunes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👨‍💻 Autor

**Jeremias O Nunes**
- Projeto desenvolvido como estudo de React e tecnologias modernas
- Foco em boas práticas e código limpo e documentado

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

- Abra uma [issue](../../issues)
- Entre em contato através do GitHub

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**