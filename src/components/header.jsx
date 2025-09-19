// Importa o componente Link do React Router para navegação entre páginas
import { Link } from "react-router-dom";

// Componente Header - cabeçalho da aplicação com navegação
export default function Header() {
  return (
    // Header com efeito glass e posicionamento fixo no topo
    <header className="glass-effect text-white shadow-2xl p-6 flex justify-between items-center w-full sticky top-0 z-50">
      {/* 
        Classes CSS explicadas:
        - glass-effect: efeito vidro fosco (definido no CSS customizado)
        - text-white: texto branco
        - shadow-2xl: sombra muito grande para dar profundidade
        - p-6: padding de 24px em todos os lados
        - flex: display flex para layout horizontal
        - justify-between: espaça elementos nas extremidades
        - items-center: alinha verticalmente no centro
        - w-full: largura 100%
        - sticky top-0: fica fixo no topo ao fazer scroll
        - z-50: z-index alto para ficar sobre outros elementos
      */}
      
      {/* Título da aplicação com gradiente colorido */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {/* 
          Classes do título:
          - text-3xl: tamanho de fonte grande (30px)
          - font-bold: peso da fonte negrito
          - bg-gradient-to-r: gradiente horizontal
          - from-purple-400 to-pink-400: cores do gradiente
          - bg-clip-text: aplica o gradiente apenas no texto
          - text-transparent: torna o texto transparente para mostrar o gradiente
        */}
        ✨ ToDo List
      </h1>
      
      {/* Menu de navegação */}
      <nav className="flex space-x-6">
        {/* 
          Classes da navegação:
          - flex: layout horizontal
          - space-x-6: espaçamento de 24px entre elementos filhos
        */}
        
        {/* Link para a página inicial */}
        <Link 
          to="/" 
          className="px-4 py-2 rounded-lg hover:bg-white/10 font-medium transition-all"
        >
          {/* 
            Classes do link:
            - px-4 py-2: padding horizontal 16px, vertical 8px
            - rounded-lg: bordas arredondadas
            - hover:bg-white/10: fundo branco semi-transparente no hover
            - font-medium: peso da fonte médio
            - transition-all: transição suave (herdada do CSS global)
          */}
          Início
        </Link>
        
        {/* Link para a página sobre */}
        <Link 
          to="/sobre" 
          className="px-4 py-2 rounded-lg hover:bg-white/10 font-medium transition-all"
        >
          Sobre
        </Link>
      </nav>
    </header>
  );
}
