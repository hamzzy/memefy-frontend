import React, {Component} from 'react';
import Header from "../../components/Header";
import {Container, Form, Jumbotron,Col,Row,Card,CardColumns} from "react-bootstrap";
import Image from  "../../assets/images/Image.png";
import Image1 from  "../../assets/images/Image(1).png";
import Image2 from  "../../assets/images/Image(2).png";


class Index extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div>
                    <Jumbotron className='hero' fluid>
                        <Container  className='text-center '>


                            <h1 className='txt'>
                                The best place  to find funny meme Photos and video
                            </h1>
                            <Form >
                                <Form.Control  type="text" className="search" placeholder="Search for meme photos and videos" />
                            </Form>
                        </Container>

                    </Jumbotron>
                </div>
                <div className='mt-5'>
                    <div className="container mt-6">

                            <Row>
                                <Col>
                                    <p className="text-left">Explore</p>
                                </Col>

                            </Row>
                    </div>
                        <div className='container-lg'>

                            <CardColumns>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={Image} />
                                    </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Image1} />
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Image2} />
                                </Card>





                                </CardColumns>

                        </div>






                </div>



            </div>
        );
    }
}

export default Index;