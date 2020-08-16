import React, {Component} from 'react';
import Header from "../../components/Header";
import {Container, Form, Jumbotron,Col,Row,Card,CardColumns, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons'
import Image0 from  "../../assets/images/Image.png";
import Image1 from  "../../assets/images/Image(1).png";
import Image2 from  "../../assets/images/Image(2).png";
import Image3 from "../../assets/images/Image(3).png";
import Image4 from "../../assets/images/Image(4).png";
import Image5 from "../../assets/images/Image(5).png";
import User from "../../assets/images/User.png";
import Footer from '../../components/footer';

class Index extends Component {
    render() {
        return (
            <div className="font bg h-100 pb-5"> 


                 <Container className='hero' fluid>
                            <Header/>
                        <Jumbotron className='text-center bg-transparent w-75 my-5 mx-auto' fluid>
                            <h1 className='txt sm-24 text-left w-100'>
                                The best place  to find funny meme Photos and video
                            </h1>
                            <Form>
                                <Form.Control  type="text" className="rounded-lg fs-24 mt-4 p-4" placeholder="Search for meme photos and videos" />
                                
                            </Form>
                        </Jumbotron>
                    </Container>

                   
                <Container className='mt-3 bg' fluid>
                    
                        <Container className='mt-3 pl-lg-5 pr-lg-5 ml-0 mb-0 pr-md-0 pr-sm-0 pr-xs-0 bg h-100' fluid>

                        <Container className='mt-3 bg' fluid>
                            <Row className="mt-5">
                                <Col className="pl-0 pt-3 pb-3">
                                    <p className="ex color-1 sm-24 ">Explore</p>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" className=" p-3">
                                <Form.Control
                                    as="select"
                                    className=" bg-transparent bd-dk check-font sm-14 color-5"
                                >
                                    <option>Photos</option>
                                    <option>videos</option>
                                </Form.Control>
                                </Col>
                            </Row>

                   </Container>
                   

                            <CardColumns className="bg mr-sm-3 mr-md-3 mr-lg-3 mr-xl-3 ml-0" fluid>
                                    <Card style={{ width: '100%' }} className="mb-md-5 mr-md-5 mb-sm-5 mr-sm-5 mb-lg-5 mr-lg-5">
                                        <Card.Img variant="top" src={Image0} />
                                        <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 ml-1" roundedCircle fluid  />
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
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={Image3} />
                                        <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 m-0" roundedCircle fluid  />
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
                                    <Card style={{ width: '100%' }} className="mb-md-5 mb-lg-5 mb-xl-5 mb-xs-0 mr-xs-5 mb-sm-5 mr-sm-0 mr-md-5 mr-lg-5 mr-xl-5">
                                        <Card.Img variant="top" src={Image1} />
                                        <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 m-0" roundedCircle fluid  />
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
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={Image2} />
                                        <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 m-0" roundedCircle fluid  />
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
                                    
                                    <Card style={{ width: '100%' }} className="mb-md-5 mb-lg-5 mb-xl-5 mb-xs-0 mr-xs-5 mb-sm-5 mr-sm-0 mr-md-5 mr-lg-5 mr-xl-5">
                                        <Card.Img variant="top" src={Image4} />
                                        <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 m-0" roundedCircle fluid  />
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
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={Image5} />
                                       <Card.ImgOverlay className="d-inline-flex align-items-end w-100 h-100 Hover-effect m-0 pb-3">
                                            <Card.Footer className=" text-white d-inline w-100 border border-0 m-0 p-0 bg-transparent">
                                                <Row className="user-func">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className=" bo p-0 m-0" fluid>
                                                        <Image src={User} className="w-50 p-0 m-0" roundedCircle fluid  />
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




                        </Container>
                        
                </Container>

                <Footer/>

            </div>
        );
    }
}

export default Index;