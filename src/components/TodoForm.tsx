import { Button, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  handleClose: () => void;
}

function TodoForm({ show, handleClose }: Props): React.JSX.Element {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="justify-content-center">
        <h5>Create Todo</h5>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button type="submit" onClick={() => console.log('create')}>Create</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TodoForm