import { Accordion, Button } from "react-bootstrap";
import { FaPencilAlt, FaRegCheckSquare, FaRegSquare, FaTrashAlt } from "react-icons/fa";
import { Todo } from "../interfaces/Todo"

interface Props {
  todo: Todo;
  deleteTodo: (todoId: string) => void
  updateTodo: (todo: Todo) => void
  editTodo: () => void
}

function TodoItem({ todo, deleteTodo, updateTodo, editTodo }: Props): React.JSX.Element {
  const { id, name, description, status, dueDate } = todo

  const toggleStatus = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    updateTodo({ ...todo, status: todo.status === 'PENDING' ? 'DONE' : 'PENDING' })
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    deleteTodo(id)
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    editTodo()
  }

  return (
    <Accordion.Item eventKey={`${id}`}>
      <Accordion.Header>
        <span className="col">
          <Button
            as='div'
            variant={status === "DONE" ? "success" : "secondary"}
            className="mx-2 pb-2"
            onClick={toggleStatus}
          >
            {status === "PENDING" && <FaRegSquare />}
            {status === "DONE" && <FaRegCheckSquare />}
          </Button>
          <time className="mx-2">{new Date(dueDate).toLocaleDateString()}</time>
        </span>
        <h3 className="m-0">{name}</h3>
        <span className="col d-flex justify-content-end">
          <Button
            as="div"
            variant="primary"
            className="mx-2 pb-2"
            onClick={handleEdit}
          >
            <FaPencilAlt />
          </Button>
          <Button
            as="div"
            variant="danger"
            className="mx-2 pb-2"
            onClick={handleDelete}>
            <FaTrashAlt />
          </Button>
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <p className="m-3">{description}</p>
      </Accordion.Body>
    </Accordion.Item >
  )
}

export default TodoItem