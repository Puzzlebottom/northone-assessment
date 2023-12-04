import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuid } from "uuid"
import { Todo, TodoFormData, todoFormSchema } from "../interfaces/Todo";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  show: boolean;
  handleClose: () => void;
  addTodo: (todo: Todo) => void;
}

function TodoForm({ show, handleClose, addTodo }: Props): React.JSX.Element {
  const formatDate = (date: Date | number): Date => {
    return new Date(date).toISOString().slice(0, 10) as unknown as Date
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<TodoFormData>({
    defaultValues: {
      dueDate: formatDate(Date.now())
    },
    resolver: zodResolver(todoFormSchema)
  })

  const submit = (data: FieldValues) => {
    const todo = { ...data, id: uuid() } as Todo
    addTodo(todo)
    reset();
    handleClose();
  }

  const cancel = (): void => {
    reset();
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit(submit)}>
        <Modal.Header className="justify-content-center">
          <h5>Create Todo</h5>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className={errors.name ? "text-danger" : ""}>
              Name {errors.name && `${errors.name.message}`}
            </Form.Label>
            <Form.Control {...register('name')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label className={errors.description ? "text-danger" : ""}>
              Description {errors.description && `${errors.description.message}`}
            </Form.Label>
            <Form.Control {...register('description')} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dueDate">
            <Form.Label className={errors.dueDate ? "text-danger" : ""}>
              Due Date {errors.dueDate && `${errors.dueDate.message}`}
            </Form.Label>
            <Form.Control {...register('dueDate')} type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select {...register('status')} >
              <option value="PENDING">Pending</option>
              <option value="DONE">Done</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>Create</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TodoForm