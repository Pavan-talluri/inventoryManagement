import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OverlayModule2(props) {

  var currentSeller = props.data;
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3> description </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={handleClose}> Save Changes </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OverlayModule2;