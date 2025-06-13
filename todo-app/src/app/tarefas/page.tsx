"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import Cabecalho from "@/componentes/Cabecalho"; // Caminho ajustado
import ModalTarefa from "@/componentes/ModalTarefa"; // Caminho ajustado
import { useTarefas } from "@/data/ContextTarefa";
import { Tarefa as TarefaContextType } from "@/types/tarefa";

interface TarefaProps {
  tarefa: TarefaContextType;
  onToggleConcluido: (id: number) => void;
  onRemover: (id: number) => void;
}

const Tarefa: React.FC<TarefaProps> = ({ tarefa, onToggleConcluido, onRemover }) => {
  const classeCard = `p-3 mb-3 rounded-lg shadow-md transition-all duration-200 ease-in-out ${
    tarefa.completed
      ? "bg-gray-800 hover:bg-gray-700"
      : "bg-gray-400 hover:bg-gray-500"
  } flex items-center justify-between`;

  const classeCorDoTexto = tarefa.completed ? "text-amber-50" : "";

  return (
    <div className={classeCard}>
      <div className="flex-1 cursor-pointer" onClick={() => onToggleConcluido(tarefa.id)}>
        <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{tarefa.todo}</h3>
        <p className={`text-sm ${classeCorDoTexto}`}>
          {tarefa.completed ? "Concluída" : "Pendente"}
        </p>
      </div>
      <button
        onClick={() => onRemover(tarefa.id)}
        className="ml-4 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors"
      >
        Remover
      </button>
    </div>
  );
};

const Home = () => {
  const { tarefas, loading, error, alternarConclusaoTarefa, removerTarefa } = useTarefas();
  const [modalAberto, setModalAberto] = useState(false);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center text-lg">
        Carregando tarefas...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500 text-lg">
        Erro ao carregar tarefas: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />

      {/* <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 transition-colors"
        onClick={() => setModalAberto(true)}
      >
        Nova Tarefa
      </button> */}

      {tarefas.length === 0 ? (
        <p className="text-center text-gray-600">Nenhuma tarefa encontrada. Adicione uma nova!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              onToggleConcluido={alternarConclusaoTarefa}
              onRemover={removerTarefa}
            />
          ))}
        </div>
      )}

      {modalAberto && (
        <ModalTarefa
          aoFechar={() => setModalAberto(false)}
        />
      )}
    </div>
  );
};

export default Home;