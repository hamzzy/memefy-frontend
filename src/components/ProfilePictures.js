import React, {Component, useEffect, useState} from 'react';
import {Tabs, Tab, Form, Button, Col, Row, Image,Card,CardDeck,CardColumns,Popover,OverlayTrigger,popover} from "react-bootstrap";
import ProfileImage from "../assets/images/profile-img.png";


const  ProfilePicture =(props)=> {

        
      const [file,setFile]=useState("");
       
    
        // this.uploadSingleFile = this.uploadSingleFile.bind(this)
        // this.upload = this.upload.bind(this)
    const uploadSingleFile=(e) =>{
            setFile(URL.createObjectURL(e.target.files[0]))
     
    }

    // upload=(e)=> {
    //     e.preventDefault()
    //     console.log(this.state.file)
    // }

        let imgPreview;
        if (file) {
            imgPreview = <Image src={file} alt='My profile picture' className="profileImg" roundedCircle fluid/>;
            console.log(file)
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
                      onChange={uploadSingleFile}
                    />
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        )
    
}


export default ProfilePicture;