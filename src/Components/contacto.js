import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Contacto({show, handleClose}) {

  return (
    <>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
          <div className="col-12">
            <a data-bs-toggle="tooltip" title="Tooltip"
              className="stretched-link"
              target="_blank"
              href="https://www.linkedin.com/in/kennymapepro/" rel="noreferrer">
             <div className="row">
                <figure className="col-2 img-contact">
                  <img src="imagenes/linkedin.png" alt="linkedin" />
                </figure>
                <p className="col-10 text-contact">LinkendIn</p>
              </div>
            </a>
            <a
              className="stretched-link"
              target="_blank"
              href="https://github.com/K3nnyPai" rel="noreferrer"> 
              <div className="row">
                <figure className="col-2 img-contact">
                  <img src="imagenes/github.png" alt="GitHub" />
                </figure>
                <p className="col-10 text-contact">Github</p>
              </div>
            </a>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

