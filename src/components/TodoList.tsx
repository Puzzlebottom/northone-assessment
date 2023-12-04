import { Accordion } from "react-bootstrap";
import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[]
  deleteTodo: (todoId: string) => void
  updateTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
}

function TodoList({ todos, deleteTodo, updateTodo, editTodo }: Props): React.JSX.Element {
  return (
    <Accordion>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={() => editTodo(todo)} />
      ))}
    </Accordion>
  )
}

export default TodoList