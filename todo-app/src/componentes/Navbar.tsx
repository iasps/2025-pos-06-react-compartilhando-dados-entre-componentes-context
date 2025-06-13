
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold rounded-full px-3 py-1 hover:bg-blue-700 transition-colors">
          Minhas Tarefas App
        </Link>
        <div className="flex space-x-4">
          <Link href="/tarefas" className="px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
            Lista de Tarefas
          </Link>
          <Link href="/tarefas/nova" className="px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
            Nova Tarefa
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;