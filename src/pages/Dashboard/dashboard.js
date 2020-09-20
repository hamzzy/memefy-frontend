import React, {Component} from 'react';
import Header from "../../components/Header";
import {Tabs,Tab, Form, Button, Col, Row} from "react-bootstrap";
import UploadNewMeme from '../../components/UploadNewMemeModal';
import ProfilePicturePreview from '../../components/ProfilePicturePreview';


class Dashboard extends Component {
    render() {
        return (
            <div className="font">
                <Header/>
                <div className="">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" variant="none" className="tabs">
                        
                        <Tab eventKey="home" title="My Uploads" className="tab">
                            <div className="contain">
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
                                <UploadNewMeme/>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile" className="tab">
                        
                        <div className="">
                        <Form className="contain height-1"> 
                            <Form.Text className="">
                                <p className="color-5 fs-24 txt-prop">My Profile</p>
                                <p className="color-5 fs-20 small-txt-prop">This information will be displayed publicly on meme you uploaded</p>
                                <p className="color-5 fs-24 txt-prop">Profile Picture</p>
                            </Form.Text>

                            <ProfilePicturePreview/>

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