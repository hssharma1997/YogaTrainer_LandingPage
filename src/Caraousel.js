import React from 'react'
import './Caraousel.css'
import {Carousel} from '3d-react-carousal';
import exercise2 from './exercisephotos/exercise2.png'
import exercise3 from './exercisephotos/exercise3.jpg'
import exercise4 from './exercisephotos/exercise4.png'

export default function Caraousel2() {
    let slides = [
        <img  src={exercise2} alt="1" />,
        <img  src={exercise3} alt="2" />  ,
        <img  src={exercise4} alt="3" />  ,
        ];
    return (
        <div className="carousel">
           <Carousel slides={slides} autoplay={false} /> 
        </div>
    )
}
