import { Accordion } from "react-bootstrap";
import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props): React.JSX.Element {
  return (
    <Accordion>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Accordion>
  )
}

export default TodoList