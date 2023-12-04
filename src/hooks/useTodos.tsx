import { useEffect, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";

import { Todo } from "../interfaces/Todo";
import { getTodos } from "../api/todoRequests";

const ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  SELECT_TODO: "SELECT_TODO",
} as const;

type State = {
  todos: Todo[];
  selected: Todo | null;
};

type Action =
  | { type: typeof ACTIONS.SET_TODOS; todos: Todo[] }
  | { type: typeof ACTIONS.ADD_TODO; todo: Todo }
  | { type: typeof ACTIONS.UPDATE_TODO; todo: Todo }
  | { type: typeof ACTIONS.DELETE_TODO; todoId: string }
  | { type: typeof ACTIONS.SELECT_TODO; todoId: string | null };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.SET_TODOS: {
      return {
        ...state,
        todos: action.todos,
      };
    }

    case ACTIONS.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }

    case ACTIONS.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    }

    case ACTIONS.UPDATE_TODO: {
      const index = state.todos.findIndex((todo) => todo.id === action.todo.id);

      if (index >= 0) {
        const updatedTodos = [...state.todos];
        updatedTodos[index] = action.todo;
        return {
          ...state,
          todos: updatedTodos,
        };
      }
      return { ...state };
    }

    case ACTIONS.SELECT_TODO: {
      if (!action.todoId) {
        return {
          ...state,
          selected: null,
        };
      }
      return {
        ...state,
        selected: state.todos.find((todo) => todo.id === action.todoId) || null,
      };
    }

    default: {
      return state;
    }
  }
};

function useTodos(): {
  todos: Todo[];
  selected: Todo | null;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  selectTodo: (todoId: string | null) => void;
} {
  const initialState: State = {
    todos: [],
    selected: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setTodos = (todos: Todo[]): void => {
    dispatch({ type: "SET_TODOS", todos });
  };

  const addTodo = (todo: Todo): void => {
    dispatch({ type: "ADD_TODO", todo });
  };

  const updateTodo = (todo: Todo): void => {
    dispatch({ type: "UPDATE_TODO", todo });
  };

  const deleteTodo = (todoId: string): void => {
    dispatch({ type: "DELETE_TODO", todoId });
  };

  const selectTodo = (todoId: string | null): void => {
    dispatch({ type: "SELECT_TODO", todoId });
  };

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  return {
    todos: state.todos,
    selected: state.selected,
    addTodo,
    updateTodo,
    deleteTodo,
    selectTodo,
  };
}

export default useTodos;
