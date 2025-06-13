"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Tarefa, TarefaListResponse } from '../types/tarefa';

interface TarefaContextType {
  tarefas: Tarefa[];
  adicionarTarefa: (titulo: string) => void;
  alternarConclusaoTarefa: (id: number) => void;
  removerTarefa: (id: number) => void;
  loading: boolean;
  error: string | null;
}

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

interface TarefaProviderProps {
  children: ReactNode;
}

export const TarefaProvider: React.FC<TarefaProviderProps> = ({ children }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://dummyjson.com/todos?limit=10');
        if (!response.ok) {
          throw new Error(`Erro ao carregar tarefas: ${response.statusText}`);
        }
        const data: TarefaListResponse = await response.json();
        setTarefas(data.todos);
      } catch (err: any) {
        setError(err.message);
        console.error("Falha ao carregar tarefas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTarefas();
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      todo: titulo,
      completed: false,
      userId: 1,
    };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  };

  const alternarConclusaoTarefa = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    );
  };

  const removerTarefa = (id: number) => {
    setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };

  const contextValue: TarefaContextType = {
    tarefas,
    adicionarTarefa,
    alternarConclusaoTarefa,
    removerTarefa,
    loading,
    error,
  };

  return (
    <TarefaContext.Provider value={contextValue}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => {
  const context = useContext(TarefaContext);
  if (context === undefined) {
    throw new Error('useTarefas must be used within a TarefaProvider');
  }
  return context;
};
