// Importa o componente Header para manter consistência visual
import Header from "../components/header";

// Componente Sobre - página informativa sobre a aplicação
export default function Sobre() {
  return (
    // Fragment React para agrupar elementos
    <>
      {/* Renderiza o cabeçalho */}
      <Header />
      
      {/* Container principal da página */}
      <div className="min-h-screen text-white px-4 py-8">
        {/* 
          Classes do container:
          - min-h-screen: altura mínima da tela inteira
          - text-white: texto branco
          - px-4: padding horizontal de 16px
          - py-8: padding vertical de 32px
        */}
        
        {/* Área de conteúdo principal */}
        <main className="max-w-2xl mx-auto">
          {/* 
            Classes do main:
            - max-w-2xl: largura máxima de 672px
            - mx-auto: centraliza horizontalmente
          */}
          
          {/* Seção de título */}
          <div className="text-center mb-8">
            {/* 
              Classes da seção de título:
              - text-center: texto centralizado
              - mb-8: margem inferior de 32px
            */}
            
            {/* Título principal com gradiente */}
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {/* 
                Classes do título:
                - text-4xl: fonte muito grande (36px)
                - font-bold: peso negrito
                - mb-2: margem inferior de 8px
                - bg-gradient-to-r: gradiente horizontal
                - from-purple-400 to-pink-400: cores do gradiente
                - bg-clip-text: aplica gradiente no texto
                - text-transparent: texto transparente para mostrar gradiente
              */}
              Sobre esta aplicação
            </h1>
            
            {/* Subtítulo */}
            <p className="text-white/70 text-lg">
              {/* 
                Classes do subtítulo:
                - text-white/70: branco com 70% opacidade
                - text-lg: fonte grande (18px)
              */}
              Conheça mais sobre o projeto
            </p>
          </div>

          {/* Card principal com informações */}
          <div className="glass-effect rounded-2xl p-8 mb-6">
            {/* 
              Classes do card:
              - glass-effect: efeito vidro fosco
              - rounded-2xl: bordas muito arredondadas
              - p-8: padding de 32px
              - mb-6: margem inferior de 24px
            */}
            
            {/* Descrição da aplicação */}
            <p className="text-white/90 mb-6 leading-relaxed text-lg">
              {/* 
                Classes da descrição:
                - text-white/90: branco com 90% opacidade
                - mb-6: margem inferior de 24px
                - leading-relaxed: espaçamento entre linhas relaxado
                - text-lg: fonte grande
              */}
              Esta é uma aplicação de lista de tarefas (ToDo List) desenvolvida com React e Vite. 
              Foi criada com o objetivo de praticar conceitos fundamentais do React como:
            </p>
            
            {/* Grid de conceitos/tecnologias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* 
                Classes do grid:
                - grid: layout em grade
                - grid-cols-1: 1 coluna no mobile
                - md:grid-cols-2: 2 colunas em telas médias+
                - gap-4: espaçamento de 16px entre itens
                - mb-6: margem inferior de 24px
              */}
              
              {/* Card de Componentização */}
              <div className="bg-white/5 rounded-xl p-4">
                {/* 
                  Classes do card individual:
                  - bg-white/5: fundo branco com 5% opacidade
                  - rounded-xl: bordas arredondadas
                  - p-4: padding de 16px
                */}
                <h3 className="text-purple-300 font-semibold mb-2">
                  {/* 
                    Classes do título do card:
                    - text-purple-300: cor roxa clara
                    - font-semibold: peso semi-negrito
                    - mb-2: margem inferior de 8px
                  */}
                  🧩 Componentização
                </h3>
                <p className="text-white/70 text-sm">
                  {/* 
                    Classes da descrição do card:
                    - text-white/70: branco com 70% opacidade
                    - text-sm: fonte pequena (14px)
                  */}
                  Estrutura modular e reutilizável
                </p>
              </div>
              
              {/* Card de Hooks */}
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-purple-300 font-semibold mb-2">🎣 Hooks</h3>
                <p className="text-white/70 text-sm">useState, useEffect e hooks customizados</p>
              </div>
              
              {/* Card de Estado */}
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-purple-300 font-semibold mb-2">🔄 Estado</h3>
                <p className="text-white/70 text-sm">Gerenciamento eficiente de dados</p>
              </div>
              
              {/* Card de Persistência */}
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-purple-300 font-semibold mb-2">💾 Persistência</h3>
                <p className="text-white/70 text-sm">Dados salvos no localStorage</p>
              </div>
            </div>
            
            {/* Seção de créditos */}
            <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
              {/* 
                Classes da seção de créditos:
                - text-center: texto centralizado
                - p-6: padding de 24px
                - bg-gradient-to-r: gradiente horizontal
                - from-purple-500/20 to-pink-500/20: gradiente roxo-rosa com 20% opacidade
                - rounded-xl: bordas arredondadas
              */}
              
              {/* Nome do desenvolvedor */}
              <p className="text-white/90 mb-2">
                {/* 
                  Classes do texto de crédito:
                  - text-white/90: branco com 90% opacidade
                  - mb-2: margem inferior de 8px
                */}
                Desenvolvido por <strong className="text-purple-300">Jeremias O Nunes</strong>
                {/* 
                  Classes do nome:
                  - text-purple-300: cor roxa clara para destacar
                */}
              </p>
              
              {/* Descrição do propósito */}
              <p className="text-white/70">
                {/* text-white/70: branco com 70% opacidade */}
                Como parte de um projeto de estudo em React
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
