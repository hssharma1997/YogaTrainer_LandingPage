import React from 'react'
import './personalinfo.css';
import instagramicon from './icons/instagramicon.png';
import facebookicon from './icons/facebookicon.png';
import youtubeicon from './icons/youtubeicon.png';
import twittericon from './icons/twittericon.png';
import linkedincon from './icons/linkedinicon.png';
import spotifyicon from './icons/spotifyicon.png';
import locationicon from './icons/locationicon.png';
import languageicon from './icons/languageicon.png';
import exercise1 from './exercisephotos/exercise1.png';
import arrowicon from './icons/arrowicon.png';

export default function Personalinfo() {
    return (
        <>
            <div className="name__info">
             <h1>Jane Doe</h1>
             <p>Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
            <div className="social__info">
              <div><a href="#"><img src={instagramicon} alt="Instagram"/></a></div>
              <div><a href="#"><img src={facebookicon} alt="Facebook"/></a></div>
              <div><a href="#"><img src={youtubeicon} alt="Youtube"/></a></div>
              <div><a href="#"><img src={twittericon} alt="Twitter"/></a></div>
              <div><a href="#"><img src={linkedincon} alt="Linkedin"/></a></div>
              <div><a href="#"><img src={spotifyicon} alt="Spotify"/></a></div>
            </div>
            <hr className="horizontal__rule"/>
            <br/>
            <div className="area__info">
               <p><img src={locationicon} alt="Location" className="location_language"/> 
               <span ><b>Lives in </b></span>
                <span className="highlight">New Delhi </span>
                </p>
               <div className="language__container"><img src={languageicon} alt="Language" className="location_language"/>
               <div ><b>Speaks </b></div>
               <div className="language__tags">
               <span className="highlight"> English </span>
               <span className="highlight"> Hindi  </span>
               <span className="highlight"> Punjabi </span>
               </div>
              
               
               </div>
            </div>
            
            <div className="newsletter__info">
                <div class="info__intro"><div><b><h6>Check out my video about 30 min yoga for beginners</h6></b></div>
                
                <div className="contact__link"><br/>
                <br/><a href="#">Contact me <img src={arrowicon} alt="arrow"/></a></div>
                </div>
                <div className="info__exercise">
                    <img src={exercise1} alt="exercise"/>
                </div>
                <div className="newsletter">
                    <h6>
                        Subscribe to my profile and never miss another update from me.
                    </h6>
                    <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label"/>
                     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
                     <button type="button" class="btn ">Subscribe</button>
                   
                    
                </div>
            </div>
        </div>
        </>
    )
}
