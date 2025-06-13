export interface Tarefa {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TarefaListResponse {
  todos: Tarefa[];
  total: number;
  skip: number;
  limit: number;
}