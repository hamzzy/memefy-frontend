import React, {useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Col,Row,Card,CardColumns, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons'
import Image0 from  "../assets/images/Image.png";
import Image1 from  "../assets/images/Image(1).png";
import Image2 from  "../assets/images/Image(2).png";
import Image3 from "../assets/images/Image(3).png";
import Image4 from "../assets/images/Image(4).png";
import Image5 from "../assets/images/Image(5).png";
import ModalImage1 from "../assets/images/modal1.png";
import ModalImage2 from "../assets/images/modal2.png";
import ModalImage3 from "../assets/images/modal3.png";
import User from "../assets/images/User.png";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      dialogClassName="modal-100w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="contained-modal-title-vcenter" className="d-inline-flex justify-content-between bg-color">
  
          <Row className="w-100 m-0">
              <Col xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"} className="" fluid>
                <p className="fs-24 sm-19 ml-xs-0 mt-3 color-1">Wide Mouth</p>
              </Col>
              <Col className="d-flex justify-content-end pl-lg-5 pl-xs-2">
                <Link to='' className=""><Button type="submit" className="fs-20 shr-bg px-4 rounded-lg d-none d-xs-none d-sm-none d-lg-inline d-xl-inline ml-5 mt-2" size="lg"><FontAwesomeIcon icon={faShareAlt} className="sm-14" />    Share</Button></Link><FontAwesomeIcon icon={faShareAlt} className="d-sm-block d-xs-block d-lg-none d-xl-none  ml-lg-5 mr-5 mt-4 mr-xs-3 ml-xs-2 color-7" size="lg" />
                <Link to='' className=""><Button type="submit" className="fs-20 btn-bg px-4 rounded-lg d-none d-xs-none d-sm-none d-lg-inline d-xl-inline ml-5 mt-2" size="lg"><FontAwesomeIcon icon={faDownload} className="sm-14" />    Download</Button></Link><FontAwesomeIcon icon={faDownload} className=" d-sm-block d-xs-block d-lg-none d-xl-none  ml-5 mt-4 ml-xs-3 color-8" size="lg"/>
              </Col>
          </Row>   
        
      </Modal.Header>
      <Modal.Body className="m-0 p-0 w-100">
    
        <Row className="d-flex flex-column m-0 p-0">
          <Col className=" w-100 p-0 m-0" fluid>
              <img src={props.src} alt="Memefy" className="w-100" fluid/>
          </Col>
          <Col className="">
            <p className="fs-24 ml-xs-0 mt-3 pl-3 color-1">Similar Meme</p>

            <CardColumns className="p-3">
                <Card className="mr-4">
                    <Card.Img variant="top" src={ModalImage1} />
                </Card>
                <Card className="mr-4">
                    <Card.Img variant="top" src={ModalImage2} />
                </Card>
                <Card className="mr-3">
                    <Card.Img variant="top" src={ModalImage3} />
                </Card>

            </CardColumns>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="fs-20 btn-bg px-4 rounded-lg mr-4" size="lg" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Gallery() {
  const [modalShow, setModalShow] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  return (
    <div className="mx-lg-5 mx-md-3  mx-sm-3 mx-xs-4">
      <CardColumns className="bg mr-sm-3 mr-md-3 mr-lg-3 mr-xl-3 ml-0" fluid>
        <Card style={{ width: '100%' }} className="mb-md-5 mr-md-5 mb-sm-5 mr-sm-5 mb-lg-5 mr-lg-5"onClick={() => {setModalShow(true); setImgSrc(Image0)}}>
            <Card.Img variant="top" src={Image0} />
            <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                    <Row className="user-func">
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                            <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                        </Col>
                        <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                            <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                        </Col>
                        <Col className="  m-0 align-self-center d-flex justify-content-between">
                            <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                            <FontAwesomeIcon icon={faDownload} className="sm-14" />
                        </Col>   
                    </Row>    
                </Card.Footer>
            </Card.ImgOverlay>
        </Card>
            <Card style={{ width: '100%' }}onClick={() => {setModalShow(true); setImgSrc(Image3)}}>
                <Card.Img variant="top" src={Image3} />
                <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                    <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                        <Row className="user-func">
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                            </Col>
                            <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                                <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                            </Col>
                                <Col className="  m-0 align-self-center d-flex justify-content-between">
                                <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                                <FontAwesomeIcon icon={faDownload} className="sm-14" />
                            </Col>   
                        </Row>    
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
            <Card style={{ width: '100%' }} className="mb-md-5 mb-lg-5 mb-xl-5 mb-xs-0 mr-xs-5 mb-sm-5 mr-sm-0 mr-md-5 mr-lg-5 mr-xl-5"onClick={() => {setModalShow(true); setImgSrc(Image1)}}>
                <Card.Img variant="top" src={Image1} />
                <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                    <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                        <Row className="user-func">
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                            </Col>
                            <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                                <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                            </Col>
                                <Col className="  m-0 align-self-center d-flex justify-content-between">
                                <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                                <FontAwesomeIcon icon={faDownload} className="sm-14" />
                            </Col>   
                        </Row>    
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
            <Card style={{ width: '100%' }}onClick={() => {setModalShow(true); setImgSrc(Image2)}}>
                <Card.Img variant="top" src={Image2} />
                <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                    <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                        <Row className="user-func">
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                            </Col>
                            <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                                <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                            </Col>
                                <Col className="  m-0 align-self-center d-flex justify-content-between">
                                <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                                <FontAwesomeIcon icon={faDownload} className="sm-14" />
                            </Col>   
                        </Row>    
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
                                    
            <Card style={{ width: '100%' }} className="mb-md-5 mb-lg-5 mb-xl-5 mb-xs-0 mr-xs-5 mb-sm-5 mr-sm-0 mr-md-5 mr-lg-5 mr-xl-5" onClick={() => {setModalShow(true); setImgSrc(Image4)}}>
                <Card.Img variant="top" src={Image4} />
                <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                    <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                        <Row className="user-func">
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                            </Col>
                            <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                                <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                            </Col>
                                <Col className="  m-0 align-self-center d-flex justify-content-between">
                                <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                                <FontAwesomeIcon icon={faDownload} className="sm-14" />
                            </Col>   
                        </Row>    
                    </Card.Footer>
                </Card.ImgOverlay>                           
            </Card>
            <Card style={{ width: '100%' }} onClick={() => {setModalShow(true); setImgSrc(Image5)}}>
                <Card.Img variant="top" src={Image5} />
                <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                    <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                        <Row className="user-func">
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className=" bo p-0 m-0" fluid>
                                <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                            </Col>
                            <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                                <p className="d-inline sm-14 p-0 m-0 ">John Paul</p>
                            </Col>
                                <Col className="  m-0 align-self-center d-flex justify-content-between">
                                <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                                <FontAwesomeIcon icon={faDownload} className="sm-14" />
                            </Col>   
                        </Row>    
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
      </CardColumns>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        src={imgSrc}
      />
    </div>
  );
}


  
export  default Gallery
