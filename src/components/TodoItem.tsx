import { Todo } from "../interfaces/Todo"

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props): React.JSX.Element {
  const { id, name, description, status, dueDate } = todo

  return (
    <div>
      <h3>{name}</h3>
      <p>{id}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p>{dueDate.toDateString()}</p>
    </div>
  )
}

export default TodoItem