import React, {useState,useEffect } from 'react';

import {Button, Col,Row,Card,CardColumns, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons'
import MyVerticallyCenteredModal from '../components/Modal';
import User from "../assets/images/User.png";

const Gallery =(props)=> {

    const [modalShow, setModalShow] = useState(false);
    const [imgSrc, setImgSrc] = useState();
    const [title,setTitle]= useState();
    
    return (
      <div className="mx-lg-5 mx-md-3  mx-sm-3 mx-xs-4">
        <CardColumns className="bg mr-sm-3 mr-md-3 mr-lg-3 mr-xl-3 ml-0" fluid>
                  {props.content.map((name) =>
          <Card style={{ width: '100%' }} className="mb-md-5 mr-md-5 mb-sm-5 mr-sm-5 mb-lg-5 mr-lg-5"onClick={() => {setModalShow(true); setImgSrc(name.fileURL); setTitle(name.title)}}>
              <Card.Img variant="top" src={name.fileURL} />
              <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                  <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                      <Row className="user-func">
                          <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                              <Image src={User} className="w-50 pt-xs-1 p-0 ml-2" roundedCircle fluid  />
                          </Col>
                          <Col className="p-1 p-sm-0 p-xs-0 m-0 align-self-center text-nowrap">
                            <p className="d-inline sm-14 p-0 m-0 ">{name}</p>
                          </Col>
                          <Col className="  m-0 align-self-center d-flex justify-content-between">
                              <FontAwesomeIcon icon={faShareAlt} className="sm-14" />
                              <FontAwesomeIcon icon={faDownload} className="sm-14" />
                          </Col>   
                      </Row>    
                  </Card.Footer>
              </Card.ImgOverlay>
          </Card>
                  )}
        </CardColumns>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          src={imgSrc}
          title={title}

        />
      </div>
    );
  }
  
  
    
  export  default Gallery;
  