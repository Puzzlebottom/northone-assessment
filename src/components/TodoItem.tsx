import { Accordion, Button } from "react-bootstrap";
import { FaPencilAlt, FaRegCheckSquare, FaRegSquare, FaTrashAlt } from "react-icons/fa";
import { Todo } from "../interfaces/Todo"

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props): React.JSX.Element {
  const { id, name, description, status, dueDate } = todo

  return (
    <Accordion.Item eventKey={`${id}`}>
      <Accordion.Header>
        <span className="col">
          <Button
            as='div'
            variant={status === "DONE" ? "success" : "secondary"}
            className="mx-2 pb-2"
            onClick={() => console.log('status')}
          >
            {status === "PENDING" && <FaRegSquare />}
            {status === "DONE" && <FaRegCheckSquare />}
          </Button>
          <time className="mx-2">{dueDate.toISOString()}</time>
        </span>
        <h3 className="m-0">{name}</h3>
        <span>
          <Button
            as="div"
            variant="primary"
            className="mx-2 pb-2"
            onClick={() => console.log('edit')}
          >
            <FaPencilAlt />
          </Button>
          <Button as="div" variant="danger" className="mx-2 pb-2" onClick={() => console.log('delete')}>
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