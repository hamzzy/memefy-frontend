import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Image, Form, Col} from "react-bootstrap";
import Emptyfolder from "../assets/images/Empty-Illustration.png";
import UploadShape from '../assets/images/Shape.png'
import PropTypes from 'prop-types';


function UploadNewMemeModal(props) {

  let [getFile, setFile] = React.useState(null);

  const onUpload = (files) => {
    getFile = files;
    imgPreview = <div className='m-0 p-0'>
    <Image src={getFile} className="uploadImage"  fluid/><input type="file"  className="file-input" />
  </div>
  };

  let imgPreview;
  if(getFile) {
    imgPreview = <div className='m-0 p-0'>
    <Image src={getFile} className="uploadImage"  fluid/><input type="file"  className="file-input" />
  </div>
  } else {
    imgPreview = <div className='mb-3 d-flex flex-column align-items-center font'>
    <input type="file"  className="file-input" onChange={(e) => {
      e.preventDefault()
      setFile(URL.createObjectURL(e.target.files[0]))
    }}/>
    <Image src={UploadShape} className="mb-3" />
    <p className="text-center fs-18 mb-4">Drag and drop here<br/> or<br/> browse</p>
    </div>
  }

  console.log(getFile);

    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modal-header-style">
            <Modal.Title id="contained-modal-title-vcenter">
                Upload New Meme
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <Form>
                <Form.Group as={Col}  controlId="formGridName" className="mr-5 mb-4">
                <Form.Label className="fs-20 color-1">Title</Form.Label>
                <Form.Control type="text" placeholder="Meme title" className="p-4"/>
                </Form.Group>

                <Form.Group as={Col}  controlId="formGridName" className="mr-5 mb-4">
                <Form.Label className="fs-20 color-1">Upload Image or Video</Form.Label>
                <FilesDragAndDrop
                  onUpload={onUpload}
                >
                    {imgPreview}
                </FilesDragAndDrop>
                </Form.Group>

                <Form.Group as={Col}  controlId="formGridLocation">
                <Form.Label className="fs-20 color-1">Category</Form.Label>
                <Form.Control type="text" placeholder="photo, new..." className="p-4"/>
                 </Form.Group>

                <Button className="p-3 fs-20 btn-bg mb-5 ml-3 upload-btn mt-3 " onClick={props.onHide}>Upload</Button>
            </Form>
           
          </Modal.Body>
        </Modal>
      );
}

function UploadNewMeme() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div className="d-flex flex-column align-items-center mt-5 font">
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

  function FilesDragAndDrop({onUpload, children, count, formats}) {

    const drop = React.useRef(null);

    const [dragging, setDragging] = React.useState(false);
    
    
    React.useEffect(() => {
      drop.current.addEventListener('dragover', handleDragOver);
      drop.current.addEventListener('drop', handleDrop);
      drop.current.addEventListener('dragenter', handleDragEnter);
      drop.current.addEventListener('dragleave', handleDragLeave);
    
      return () => {
        drop.current.removeEventListener('dragover', handleDragOver);
        drop.current.removeEventListener('drop', handleDrop);
        drop.current.removeEventListener('dragenter', handleDragEnter);
        drop.current.removeEventListener('dragleave', handleDragLeave);
      };
    }, []);

    const drag = React.useRef(null);

    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      

      if (e.target !== drag.current) {
        setDragging(true);
      }
    };
    
    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      

      if (e.target === drag.current) {
        setDragging(false);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();

      setDragging(false);
    
      // const {files} = e.dataTransfer;

      // this is required to convert FileList object to array
      const files = [...e.dataTransfer.files];

      console.log(files);

      // check if the provided count prop is less than uploaded count of files
      if (count && count < files.length) {
        return console.log(`Only ${count} file${count !== 1 ? 's' : ''} can be uploaded at a time`);
        // return;
      }

      // check if some uploaded file is not in one of the allowed formats
      if (formats && files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
        return console.log(`Only following file formats are acceptable: ${formats.join(', ')}`);
        // return;
      }
    
      if (files && files.length) {
        onUpload(URL.createObjectURL(files[0]));
      }
    };

    return (
      <label ref={drop} className='FilesDragAndDrop__area'>
        {/* {dragging && (
      <div className='FilesDragAndDrop__placeholder'>
        Drop that file down low
      </div>
    )} */}
        {children}
      </label>
    );
  }
  
  FilesDragAndDrop.propTypes = {
    onUpload: PropTypes.func.isRequired,
  };

  export  default UploadNewMeme;