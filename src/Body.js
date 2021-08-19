import React from 'react'
import Photo from './Photo.png'
import './Body.css'
import Personalinfo from './Personalinfo'

export default function Body() {
    return (
        <div className="intro">
            <div className="body">
            <div className="full__info">
            <div className="info">
            <div className="photo">
            <img src={Photo} class="rounded float-start" alt="Profile Picture"/>
            </div>
            <div className="tags">
                <div>Yoga</div>
                <div>Wellness</div>
                <div>Fitness</div>
                
                
                
            </div>
            <div className="contact">
            <div className="b_a"><button type="button" class="btn specialbtn ">Book Trial</button></div>
            <div className="b_b"><button type="button" class="btn b_b ">Contact me</button></div>
            </div>
        </div>
        <Personalinfo/>
            </div>
       
            </div>
        </div>
    )
}
