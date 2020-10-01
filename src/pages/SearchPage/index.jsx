import React, { Component } from 'react'
import Header from "../../components/Header";
import {Container, Form, Jumbotron,Col,Row} from "react-bootstrap";
import Footer from '../../components/footer';
import Gallery from '../../components/Modal';

class index extends Component {
    render() {
        return (
            <div className="font bg h-100 pb-5"> 
                            <Header/>
                        <Jumbotron className='text-center bg-transparent w-75 my-5 mx-auto' fluid>
                            <Form>
                                <Form.Control  type="text" className="rounded-lg fs-24 mt-4 p-4" placeholder="Search for meme photos and videos" />
                                
                            </Form>
                        </Jumbotron>
                        <div className="texts">
                            <h1>Wide Mouth</h1>
                            <p>Browse through our funny meme collection. All our meme are of high quality and can be downloaded for use anywhere - for free.</p>
                        </div>
                    
                   
                <Container className='mt-3 bg' fluid>
                    
                        <Container className='mt-3 pl-lg-5 pr-lg-5 ml-0 mb-0 pr-md-0 pr-sm-0 pr-xs-0 bg h-100' fluid>

                        <Container className='mt-3 bg' fluid>
                            <Row className="mt-5">
                                <Col className="pl-0 pt-3 pb-3">
                                    <p className="ex color-1 sm-24 ">Search Result</p>
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
                   

                    </Container>
                        <Gallery/>
                </Container>

                <Footer/>

            </div>
        )
    }
}

export default index
