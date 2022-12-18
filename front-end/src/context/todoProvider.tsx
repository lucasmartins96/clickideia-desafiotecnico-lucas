import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Todo } from '../types/Todo';
import { getTodos, login, postTodo } from '../services/api';
import { TodoContext } from './todoContext';

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [todoToDos, setTodoToDos] = useState<Todo[]>([]);
  const [doingToDos, setDoingToDos] = useState<Todo[]>([]);
  const [doneToDos, setDoneToDos] = useState<Todo[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    login()
      .then((status) => {
        switch (status) {
          case 200:
            getTodos()
              .then((todos) => {
                const parsedTodos = mapToTodoList(todos);

                console.log(parsedTodos);
                setToDos(parsedTodos);
              })
              .catch(() => setError(true));
            break;
          default:
            setLoading(false);
        }
      })
      .catch(() => setError(true));
  }, []);

  const filterByList = () => {
    let toDoList: Todo[] = [];
    let doingList: Todo[] = [];
    let doneList: Todo[] = [];

    toDos.forEach((toDo: Todo) => {
      switch (toDo.list) {
        case 'ToDo':
          toDoList.push(toDo);
          break;
        case 'Doing':
          doingList.push(toDo);
          break;
        case 'Done':
          doneList.push(toDo);
          break;
        default:
          break;
      }
      setTodoToDos(toDoList);
      setDoingToDos(doingList);
      setDoneToDos(doneList);
    });
  };

  const mapToTodoList = (arr: any[]): Todo[] => {
    return arr.map((todo: any) => {
      const t: Todo = {
        id: todo.id,
        title: todo.title,
        content: todo.content,
        list: todo.list,
      };
      return t;
    });
  };

  const createTodo = async (todo: Todo) => {
    try {
      await postTodo(todo);
      let allTodos = await getTodos();

      setToDos(mapToTodoList(allTodos));
    } catch (error) {
      console.log(error);
    }
  };

  // const value = useMemo(
  //   () => ({
  //     toDos,
  //     loading,
  //     error,
  //     createTodo,
  //   }),
  //   [toDos, loading, error]
  // );
  const value = {
    toDos,
    loading,
    error,
    createTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export function useToDos() {
  return useContext(TodoContext);
}
