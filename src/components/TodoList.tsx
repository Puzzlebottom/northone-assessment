import { Accordion } from "react-bootstrap";
import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[]
  deleteTodo: (todoId: string) => void
}

function TodoList({ todos, deleteTodo }: Props): React.JSX.Element {
  return (
    <Accordion>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </Accordion>
  )
}

export default TodoList