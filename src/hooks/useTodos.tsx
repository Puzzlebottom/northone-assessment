import { useReducer } from "react";
import { Todo } from "../interfaces/Todo";
import dummyTodos from "../data/dummyTodos";

const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SELECT_TODO: 'SELECT_TODO',
} as const;

type State = {
  todos: Todo[];
  selected: Todo | null;
}

type Action =
  | { type: typeof ACTIONS.ADD_TODO; todo: Todo }
  | { type: typeof ACTIONS.UPDATE_TODO; todo: Todo }
  | { type: typeof ACTIONS.DELETE_TODO; todoId: string }
  | { type: typeof ACTIONS.SELECT_TODO; todoId: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId)
      }

    default:
      return state;
  }
}

function useTodos(): {
  todos: Todo[],
  selected: Todo | null,
  addTodo: (todo: Todo) => void
  deleteTodo: (todoId: string) => void
} {
  const initialState: State = {
    todos: dummyTodos,
    selected: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (todo: Todo): void => {
    dispatch({ type: 'ADD_TODO', todo })
  }

  const deleteTodo = (todoId: string): void => {
    dispatch({ type: 'DELETE_TODO', todoId })
  }

  return { todos: state.todos, selected: state.selected, addTodo, deleteTodo }
}

export default useTodos