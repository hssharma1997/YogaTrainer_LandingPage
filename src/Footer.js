import React from 'react'
import './footer.css'
import exercise2 from './exercisephotos/exercise2.png';
import exercise3 from './exercisephotos/exercise3.jpg';
import exercise4 from './exercisephotos/exercise4.png';
import instagramiconwhite from './icons/instagramiconwhite.png';
import facebookiconwhite from './icons/facebookiconwhite.png';
import linkediniconwhite from './icons/linkediniconwhite.png';
import breadicon from './icons/breadicon.png'
import Caraousel from './Caraousel'


export default function Footer() {
    return (
        <div className="footer">
            <br/>
            <br/>
          <h1>BROWSE ALL MY OFFERINGS</h1>
            <Caraousel/>

            <div className="footer__info">
                <div>
            <div><h1>Powered by <img src={breadicon} alt="breadicon"/></h1></div>
            <div className="social__icons">
                <a href="#"><img src={instagramiconwhite} placeholder="instagram"/></a>
                <a href="#"><img src={facebookiconwhite} placeholder="facebook"/></a>
                <a href="#"><img src={linkediniconwhite} placeholder="linkedin"/></a>
            </div>
            </div>
            <div>
            <div className="all_rights_reserved">
                <div><p>
                Bread 2021 All rights reserved
                </p></div>
                <div className="terms_privacy_about">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">About</a>
                </div>
            </div>
            </div>
            </div>
        </div>
        
    )
}
