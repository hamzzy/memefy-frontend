import React, { Component } from 'react';
import {Row, Col, Image} from "react-bootstrap";
import ProfileImage from "../assets/images/profile-img.png";

class ProfilePictureChange extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <Image src={this.state.file} alt='My profile picture' className="" roundedCircle fluid/>;
        } else {
            imgPreview = <Image src={ProfileImage} alt='My profile picture' className="" roundedCircle fluid/>;
        }
        return (
            <div>
                <Row className="mb-5 mt-4">
                    <Col xs={5} sm={2} md={2} lg={2} xl={2} className="div-border">
                            {imgPreview}
                    </Col>
                    <Col className="align-self-center">
                        <div className="form-group">
                            <label className="fs-20 btn-bg change-btn">
                                 Change<input type="file"  className=" p-3 px-4 fs-20 btn-bg file-input" onChange={this.uploadSingleFile}/>
                            </label>
                        </div>
                        {/* <Button  type="button" className=" p-3 px-4 fs-20 btn-bg" onClick={this.upload}>
                            Change
                        </Button> */}
                    </Col>   
                </Row>
            </div >
        )
    }
}

export default ProfilePictureChange;