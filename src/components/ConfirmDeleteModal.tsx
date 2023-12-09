import { Button, Modal } from "react-bootstrap";
import { Todo } from "../interfaces/Todo";

interface Props {
  show: boolean;
  onHide: () => void;
  selected: Todo | null;
}

function ConfirmDeleteModal({ show, onHide, selected }: Props) {
  return (
    <Modal show={show} onHide={() => onHide()} centered>
      <Modal.Body>
        {`Are you sure you want to delete ${selected?.name}?`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
