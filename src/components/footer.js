import React, { Component } from 'react'
import img from '../assets/images/meme.svg'
export class footer extends Component {
    render() {
        return (
            <div className="font bg h-50">
                <div className='text-center mt-5 color-1 fs-24'>
                    <img src={img} alt="Memefy Logo"/>
                    <p className="sm-24">&copy; 2020 Memefy.</p>
                </div>
                
                
            </div>
        )
    }
}

export default footer
