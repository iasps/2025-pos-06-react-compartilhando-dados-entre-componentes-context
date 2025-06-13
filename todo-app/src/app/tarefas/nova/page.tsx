"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cabecalho from '@/componentes/Cabecalho';
import { useTarefas } from '@/data/ContextTarefa';

const NovaTarefaPage: React.FC = () => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const { adicionarTarefa } = useTarefas();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (tituloTarefa.trim() === '') {
      return;
    }

    adicionarTarefa(tituloTarefa);
    setTituloTarefa('');
    router.push('/tarefas');
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Cabecalho />

      <Link href="/tarefas" className="text-blue-600 hover:underline mt-4 block">
        Voltar para a Lista de Tarefas
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 mt-8">
        Adicionar Nova Tarefa
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <div className="mb-6">
          <label htmlFor="titulo" className="block text-gray-700 text-sm font-bold mb-2">
            Título da Tarefa:
          </label>
          <input
            type="text"
            id="titulo"
            value={tituloTarefa}
            onChange={(e) => setTituloTarefa(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: Comprar mantimentos"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Adicionar Tarefa
          </button>
          <button
            type="button"
            onClick={() => router.push('/tarefas')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaTarefaPage;
