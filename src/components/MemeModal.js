import React, {Component, useEffect, useState,useCallback} from 'react';
import {Tabs, Tab, Form, Button, Col, Row, Image,Card,CardDeck,CardColumns,Popover,OverlayTrigger,popover} from "react-bootstrap";
import DragAndDropPreviews from '../components/ImageDragAndDrop';
import Modal from 'react-bootstrap/Modal';

const  UploadNewMemeModal=(props)=>{

  const [title,setTitle]=useState("");
  const [memetype,setMemetype]=useState("");
  const [memecat,setMemecat]=useState("");
  const [files, setFiles] = useState([]);



  

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    // console.log(acceptedFiles);
  };

  const onChangetitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  
  };
  

  const onChangememetype=(e)=>{
    const  memetypes= e.target.value;
    setMemetype(memetypes);
  }

  const onChangememecat=(e)=>{
    const  memecat= e.target.value;
    setMemecat(memecat);
  }

const uploadMeme=(e)=>{
  e.preventDefault();
 console.log(files);

}

    return (
      <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header
          closeButton
          className='modal-header-style font'
        >
          < Modal.Title
            id='contained-modal-title-vcenter'
            className='fs-24 sm-20'
          >
            Upload New Meme
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <Form>
            <Form.Group as={Col} controlId='formGridName' className='mr-5 mb-4'>
              <Form.Label className='fs-20 color-1'>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Meme title'
                className='p-4'
                value={title}
                onChange={onChangetitle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridName' className='mr-5 mb-4'>
              <Form.Label className='fs-20 color-1'>
                Upload Image or Video
              </Form.Label>
              <DragAndDropPreviews onDrop={onDrop} acceptedFiles={files}  />
            </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1"  >
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" value={memecat} onChange={onChangememecat}>
                            <option>category</option>
                            <option>{props.cat}</option>
                  </Form.Control>
                    </Form.Group>



              <Form.Group controlId="exampleForm.ControlSelect1"  >
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={memetype}
                              onChange={onChangememetype}>
              <option>type</option>
              <option>Image</option>
              <option>Video</option>

              </Form.Control>
              </Form.Group>


         

            <Button
              className='p-3 fs-20 btn-bg mb-5 ml-3 upload-btn mt-3 '
              onClick={uploadMeme}
            >
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
}


export default  UploadNewMemeModal;