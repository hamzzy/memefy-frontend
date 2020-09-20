import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Image, Form, Col} from "react-bootstrap";
import Emptyfolder from "../assets/images/Empty-Illustration.png";

function UploadNewMemeModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modal-header-style">
            <Modal.Title id="contained-modal-title-vcenter">
                Upload New Meme
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group as={Col}  controlId="formGridName" className="mr-5 mb-4">
                <Form.Label className="fs-20 color-1">Title</Form.Label>
                <Form.Control type="text" placeholder="John Paul" className="p-4"/>
                </Form.Group>

                <Form.Group as={Col}  controlId="formGridLocation">
                <Form.Label className="fs-20 color-1">Category</Form.Label>
                <Form.Control type="text" placeholder="Nigeria" className="p-4"/>
                </Form.Group>
            </Form>
            <Button className="p-3 px-5 fs-20 btn-bg mb-5 w-100" onClick={props.onHide}>Upload</Button>
          </Modal.Body>
        </Modal>
      );
}

function UploadNewMeme() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div className="d-flex flex-column align-items-center mt-5">
          <Image src={Emptyfolder} className="mb-4 pt-4" />
            <p className="color-5 fs-24 txt-prop mb-4">No meme uploaded yet!</p>
                <Button  type="submit" className="p-3 px-5 fs-20 btn-bg mb-5" onClick={() => setModalShow(true)}>
                    Upload New Meme
                </Button>
        </div>

        <UploadNewMemeModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

      </>
    );
  }

  export  default UploadNewMeme;