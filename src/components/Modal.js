import React, {useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Col,Row,Card,CardColumns, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons'
import ModalImage1 from "../assets/images/modal1.png";
import ModalImage2 from "../assets/images/modal2.png";
import ModalImage3 from "../assets/images/modal3.png";


const MyVerticallyCenteredModal=(props) =>{
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
  <p className="fs-24 sm-19 ml-xs-0 mt-3 color-1">{props.title}</p>
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
        <Button className="fs-20 sm-14 btn-bg px-4 rounded-lg mr-4" size="lg" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;