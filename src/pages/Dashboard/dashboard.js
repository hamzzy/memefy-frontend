import React, {Component, useEffect, useState} from 'react';
import Header from "../../components/Header";
import {useDispatch,useSelector} from "react-redux";
import {Tabs, Tab, Form, Button, Col, Row, Image,Card,CardDeck,CardColumns,Popover,OverlayTrigger,popover} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import Emptyfolder from "../../assets/images/Empty-Illustration.png";
import MemeService from '../../services/meme.service';
import AuthService from '../../services/auth-services';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import UploadNewMemeModal from '../../components/MemeModal';
import ProfilePicture from '../../components/ProfilePictures';
import swal from 'sweetalert';
import { SET_MESSAGE,} from "../../actions/types";
const Dashboard=(props)=> {



    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [content, setContent] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [memcat,setMemecat] = useState([]);
    const dispatch = useDispatch();

    // const ref = useRef(null);
    const { user: currentUser } = useSelector((state) => state.auth);
    const {message} = useSelector(state => state.message);


    const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };


const onChangeEmail = (e) => {
 const email = e.target.value;
 setEmail(email);
};

const onChangePassword = (e) => {
 const password = e.target.value;
 setPassword(password);
};





const handleUpdate = (e) => {
  e.preventDefault();
  console.log(email);
};

const handleClick = (event) => {
  setShow(!show);
  setTarget(event.target);
  AuthService.updateUser().then(
    (response)=>{


  },(error)=>{
    const message =(Object.entries(error.response.data).map(([key, value]) => value));
  
  
            dispatch({
            type: SET_MESSAGE,
            payload: message,
            });
  })

};

useEffect(() => {
  MemeService.UserMeme().then(
    (response) => {
      setContent(response.data);
      console.log(response.data);
    },
    (error) => {
      const _content =(Object.entries(error.response.data).map(([key, value]) => value));
// y      setContent(_content);
    }
  );


  MemeService.MemeCat().then((response) => {
    setMemecat(response.data.results);

    console.log(response.data.results);
  },
  (error) => {
    const _content =error.response.data;
     setMemecat(_content);
  }
  )
}, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }


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
                          onClick={() => setModalShow(true)}

                        >
                          Upload
                        </Button>


                        <UploadNewMemeModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          cat={memcat.map((data)=> data.name)}
                        />
                      </Col>
                    </Row>
<Row>
<Col md='5' xs='2' className=''>

        {content.length > 0 ? (
            <CardDeck className="mb-md-2 mr-md-2 mb-sm-2 mr-sm-2 mb-lg-2 mr-lg-1">
                   {content.map((data)=>
                 <Card style={{width: '18rem'}} >
                   <Card.Img variant="top" src={data.fileURL} />
                     <Row>
                       <Col>
                     <Card.Title>{data.title}</Card.Title>
                     <FontAwesomeIcon icon={faEllipsisH} size="lg" /> 
                     </Col>
                     </Row>   
                 </Card>
                 )}
              </CardDeck>
                  ):(
                <div className='d-flex flex-column align-items-center mt-5 font'>

                    <Image src={Emptyfolder} className='mb-4 pt-4' />
                <p className='color-5 fs-24 txt-prop mb-4 sm-18'>
                  No meme uploaded yet!
                </p>
                <Button
                  type='submit'
                  className='fs-20 btn-bg mb-5 sm-14 button-padding'
                >
                  Upload New Meme
                </Button>
                </div>
                  )}
</Col>
</Row>
                </div>
<div>

                   

                  </div>
                </Tab>
                
                <Tab eventKey='profile' title='Profile' className='tab'>
                  <div className='font contain height-1'>
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
                    <Form onSubmit={handleUpdate} >               

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
                            placeholder=""
                            className='p-4'
                            name="name"
                            value=""
                            onChange={onChangeName}
                          />
                        </Form.Group>
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
                            placeholder={currentUser.email}
                            className='p-4'
                            name="email"
                            value=""
                            onChange={onChangeEmail}

                          />
                        </Form.Group>
                      </Form.Row>

                    

                      <Button
                        type='submit'
                        className='mt-3 fs-20
sm-14 button-padding small-button-padding btn-bg mb-5'
                      >
                        Update Profile
                      </Button>
                    </Form>


                    
                  </div>







                </Tab>






              </Tabs>
            </div>
          </div>
        )
    
        }





// function EmptyState(props) {
  
//     return (
//       <>
        

       
//       </>
//     )
// }


export default Dashboard;