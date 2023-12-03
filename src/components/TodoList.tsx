import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props): React.JSX.Element {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default TodoList