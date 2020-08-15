import React, { Component } from 'react'
import Header from "../../components/Header";
import woman_404 from  "../../assets/images/woman_404.png";
import {Link} from "react-router-dom";

export class Error extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="contaner">
                    <img className="err" src={woman_404} />
                    <h3 className="oops">Oops! you hit a 404</h3>
                    <p className="oops_text">The page you are looking for was not found</p>
                    <Link to="/"><button className="but_home">Go back home</button></Link>
                </div>
                
            </div>
        )
    }
}

export default Error;
