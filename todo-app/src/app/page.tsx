import Image from "next/image";
import Link from "next/link";
import Cabecalho from "@/componentes/Cabecalho";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Cabecalho />

      {/* <div className="mb-4">
        <Link href="/tarefas" className="text-blue-600 hover:underline">
          Ir para Tarefas
        </Link>
      </div> */}

    </div>
  );
}
