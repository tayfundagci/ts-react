import React, { useState } from 'react';
import  {Button, Modal} from "react-bootstrap"

type Props = {title: string, titleNumber: number}

function BootstrapModal({title, titleNumber}: Props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Open Modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}, {titleNumber}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Labore velit elit amet sit pariatur esse occaecat incididunt ex incididunt culpa.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default BootstrapModal;