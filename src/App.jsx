// Importa componentes do React Router para navegação entre páginas
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa as páginas da aplicação
import Home from "./pages/home"; // Página principal com lista de tarefas
import Sobre from "./pages/sobre"; // Página informativa

// Componente App - componente raiz da aplicação
// Responsável por configurar o roteamento entre páginas
export default function App() {
  return (
    // BrowserRouter: habilita roteamento baseado na URL do navegador
    // Permite navegação sem recarregar a página (SPA - Single Page Application)
    <BrowserRouter>
      {/* Routes: container que define todas as rotas da aplicação */}
      <Routes>
        {/* 
          Route: define uma rota individual
          - path: URL que ativa esta rota
          - element: componente React que será renderizado
        */}
        
        {/* Rota para a página inicial */}
        <Route 
          path="/" // URL raiz (exemplo.com/)
          element={<Home />} // Renderiza o componente Home
        />
        
        {/* Rota para a página sobre */}
        <Route 
          path="/sobre" // URL /sobre (exemplo.com/sobre)
          element={<Sobre />} // Renderiza o componente Sobre
        />
      </Routes>
    </BrowserRouter>
  );
}
