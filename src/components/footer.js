import React, { Component } from 'react'
import img from '../assets/images/meme.svg'
export class footer extends Component {
    render() {
        return (
            <div>
                <div className='text-center mt-5'>
                    <img src={img} alt=""/>
                    <p>Built with love by Hamzat and soliudeen </p>
                </div>
                
                
            </div>
        )
    }
}

export default footer
