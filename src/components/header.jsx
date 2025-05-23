import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 shadow p-4 flex justify-between items-center w-full ">
      <h1 className="text-2xl font-bold">📝 ToDo List</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Início</Link>
        <Link to="/sobre" className="hover:text-gray-300">Sobre</Link>
      </nav>
    </header>
  );
}
