import React, {Component, useEffect, useState} from 'react';
import Header from "../../components/Header";
import Modal from 'react-bootstrap/Modal';
import {Tabs, Tab, Form, Button, Col, Row, Image} from "react-bootstrap";
import ProfileImage from "../../assets/images/profile-img.png";
import UploadShape from '../../assets/images/Shape.png';
import {useDropzone} from 'react-dropzone';
import Emptyfolder from "../../assets/images/Empty-Illustration.png";


class Dashboard extends Component {
    render() {
        return (
          <div className='font'>
            <Header />
            <div className=''>
              <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                variant='none'
                className='tabs'
              >
                <Tab eventKey='home' title='My Uploads' className='tab sm-24'>
                  <div className='contain'>
                    <Row className='mb-4'>
                      <Col md='8' xs='8' className='' fluid='true'>
                        <p className='color-5 fs-24 txt-prop sm-20'>
                          {' '}
                          My Uploads
                        </p>
                        <p className='color-5 fs-20 small-txt-prop sm-14'>
                          All meme photos and videos you uploaded will appear
                          here
                        </p>
                      </Col>
                      <Col
                        md='4'
                        xs='4'
                        className='d-flex justify-content-end align-items-start'
                      >
                        <Button
                          type='submit'
                          className='fs-20 btn-bg sm-14 button-padding small-button-padding'
                        >
                          Upload
                        </Button>
                      </Col>
                    </Row>
                    <EmptyState />
                  </div>
                </Tab>
                <Tab eventKey='profile' title='Profile' className='tab'>
                  <div className='font'>
                    <Form className='contain height-1'>
                      <Form.Text className=''>
                        <p className='color-5 fs-24 txt-prop sm-20'>
                          My Profile
                        </p>
                        <p className='color-5 fs-20 small-txt-prop sm-14'>
                          This information will be displayed publicly on meme
                          you uploaded
                        </p>
                        <p className='color-5 fs-24 txt-prop sm-20'>
                          Profile Picture
                        </p>
                      </Form.Text>

                      <ProfilePicture />

                      <Form.Row>
                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='formGridName'
                          className='mr-lg-5 mb-lg-4'
                        >
                          <Form.Label className='fs-20 color-1'>
                            Name
                          </Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='John Paul'
                            className='p-4'
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='formGridLocation'
                        >
                          <Form.Label className='fs-20 color-1'>
                            Location
                          </Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Nigeria'
                            className='p-4'
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='formGridEmail'
                          className='mr-lg-5 mb-lg-4'
                        >
                          <Form.Label className='fs-20 color-1'>
                            Email
                          </Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='johnpaul@example.com'
                            className='p-4'
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='formGridChangePassword'
                        >
                          <Form.Label className='fs-20 color-1'>
                            Change Password
                          </Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='**********'
                            className='p-4'
                            autoComplete='current-password'
                          />
                        </Form.Group>
                      </Form.Row>

                      <Button
                        type='submit'
                        className='mt-3 fs-20
sm-14 button-padding small-button-padding btn-bg mb-5'
                      >
                        Save Changes
                      </Button>
                    </Form>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        )
    }
}

class ProfilePicture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <Image src={this.state.file} alt='My profile picture' className="profileImg" roundedCircle fluid/>;
            console.log(this.state.file)
        } else {
            imgPreview = <Image src={ProfileImage} alt='My profile picture' className="profileImg" roundedCircle fluid/>;
        }
        return (
          <div>
            <Row className='mb-5 mt-4'>
              <Col
                xs={4}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                className=''
              >
                <div className=' rounded-circle profileImg mr-xs-5 mr-sm-5 mr-md-5'>
                  {imgPreview}
                </div>
              </Col>
              <Col
                xs={8}
                sm={10}
                md={10}
                lg={10}
                xl={10}
                className='align-self-center'
              >
                <div className='form-group ml-lg-5 sm-14 button-padding'>
                  <label className='fs-20 btn-bg change-btn sm-14 button-padding'>
                    Change
                    <input
                      type='file'
                      className=' p-3 px-4 fs-20 btn-bg file-input sm-14 button-padding'
                      onChange={this.uploadSingleFile}
                    />
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        )
    }
}

function UploadNewMemeModal(props) {

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
          <Modal.Title
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
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridName' className='mr-5 mb-4'>
              <Form.Label className='fs-20 color-1'>
                Upload Image or Video
              </Form.Label>
              <DragAndDropPreviews file={props.files} />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridLocation'>
              <Form.Label className='fs-20 color-1'>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='photo, new...'
                className='p-4'
              />
            </Form.Group>

            <Button
              className='p-3 fs-20 btn-bg mb-5 ml-3 upload-btn mt-3 '
              onClick={props.onHide}
            >
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
}

function EmptyState(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div className='d-flex flex-column align-items-center mt-5 font'>
          <Image src={Emptyfolder} className='mb-4 pt-4' />
          <p className='color-5 fs-24 txt-prop mb-4 sm-18'>
            No meme uploaded yet!
          </p>
          <Button
            type='submit'
            className='fs-20 btn-bg mb-5 sm-14 button-padding'
            onClick={() => setModalShow(true)}
          >
            Upload New Meme
          </Button>
        </div>

        <UploadNewMemeModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}

function DragAndDropPreviews() {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      maxFiles: 1,
      accept: 'image/* video/*',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });

    
    const thumbs = files.map(file => (
      <div key={file.name}>
        
          <img
            src={file.preview}
            alt=''
            className='uploadImage'
          />
  
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
      <>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          {files.length === 0 && (
            <div className="FilesDragAndDrop__area d-flex flex-column align-items-center font pt-4">
              <Image src={UploadShape} className="mb-3" alt=''/>
              <p className="text-center fs-18 mb-4 fs-10">Drag and drop here<br/> or<br/> browse</p>
            </div>
          )}

          {files.length > 0 && (
            <div>
              {thumbs}
            </div>
           )}
        </div>
        
      </>
    );
}

export default Dashboard;