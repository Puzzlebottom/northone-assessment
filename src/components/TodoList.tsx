import { Accordion } from "react-bootstrap";
import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[]
  deleteTodo: (todoId: string) => void
  updateTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
  sortBy: string
}

function TodoList({ todos, deleteTodo, updateTodo, editTodo, sortBy }: Props): React.JSX.Element {

  let sortedTodos: Todo[];

  switch (sortBy) {
    case 'name':
      sortedTodos = todos.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0
      })
      break

    case 'dueDate':
      sortedTodos = todos.sort((a, b) => {
        return new Date(a.dueDate).valueOf() - new Date(b.dueDate).valueOf()
      })
      break

    case 'status':
      const statusMap = {
        PENDING: 0,
        DONE: 1,
      }
      sortedTodos = todos.sort((a, b) => {
        return statusMap[a.status] - statusMap[b.status]
      })
      break

    default:
      sortedTodos = todos;
  }

  return (
    <Accordion>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={() => editTodo(todo)} />
      ))}
    </Accordion>
  )
}

export default TodoList