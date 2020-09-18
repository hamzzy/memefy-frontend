import React, {Component} from 'react';
import Header from "../../components/Header";
import {Tabs,Tab, Form, Button, Col, Row, Image} from "react-bootstrap";
import ProfileImage from "../../assets/images/profile-img.png";


class Dashboard extends Component {
    render() {
        return (
            <div className="font">
                <Header/>
                <div className="">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" variant="none" className="tabs">
                        
                        <Tab eventKey="home" title="My Uploads" className="tab">
                            <div className="form">
                            <Row className="mb-4">
                                <Col  className="" fluid>
                                <p className="color-5 fs-24 txt-prop"> My Uploads</p>
                                <p className="color-5 fs-20 small-txt-prop">All meme photos and videos you uploaded will appear here</p>
                                </Col>
                                <Col className="d-flex justify-content-end align-items-center">
                                    <Button  type="submit" className="p-3 px-5 fs-20 btn-bg">
                                        Upload
                                    </Button>
                                    
                                </Col>   
                            </Row> 

                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile" className="tab">
                        
                        <div className="">
                        <Form className="form"> 
                            <Form.Text className="">
                                <p className="color-5 fs-24 txt-prop">My Profile</p>
                                <p className="color-5 fs-20 small-txt-prop">This information will be displayed publicly on meme you uploaded</p>
                                <p className="color-5 fs-24 txt-prop">Profile Picture</p>
                            </Form.Text>

                            <Row className="mb-5 mt-4">
                                <Col xs={5} sm={2} md={2} lg={2} xl={2} className="" fluid>
                                    <Image src={ProfileImage} className="w-75" roundedCircle fluid  />
                                </Col>
                                <Col className="align-self-center">
                                <div class="custom-file" id="customFile" lang="es">
                                <label class="custom-file" id="customFile">
                                        <input type="file" class="custom-file-input"/>
                                        <span class="custom-file-control form-control-file"></span>
                                </label>
                                </div>
                                </Col>   
                            </Row> 

                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="formGridName" className="mr-5 mb-4">
                                <Form.Label className="fs-20 color-1">Name</Form.Label>
                                <Form.Control type="text" placeholder="John Paul" className="p-4"/>
                                </Form.Group>

                                <Form.Group as={Col} md="5" controlId="formGridLocation">
                                <Form.Label className="fs-20 color-1">Location</Form.Label>
                                <Form.Control type="text" placeholder="Nigeria" className="p-4"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="formGridEmail" className="mr-5 mb-4">
                                <Form.Label className="fs-20 color-1">Email</Form.Label>
                                <Form.Control type="email" placeholder="johnpaul@example.com" className="p-4"/>
                                </Form.Group>

                                <Form.Group as={Col} md="5" controlId="formGridChangePassword">
                                <Form.Label className="fs-20 color-1">Change Password</Form.Label>
                                <Form.Control type="password" placeholder="" className="p-4"/>
                                </Form.Group>
                            </Form.Row>

                            <Button  type="submit" className="mt-3 p-3 px-4 fs-20 btn-bg mb-5">
                                 Save Changes
                            </Button>
                        </Form>
                            </div>
                            
                        </Tab>

                    </Tabs>
                </div>

            </div>
        );
    }
}

export default Dashboard;