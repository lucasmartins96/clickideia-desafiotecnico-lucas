import { createContext } from 'react';
import { Todo } from '../types/Todo';

interface TodoProps {
  toDos: Todo[];
  loading: boolean;
  error: boolean;
}

export const TodoContext = createContext<TodoProps>({
  toDos: [],
  loading: false,
  error: false,
});
