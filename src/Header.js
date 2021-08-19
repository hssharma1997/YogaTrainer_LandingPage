import React from 'react'
import './Header.css'
import Nav from './Nav'

function Header() {
    return (
        <div className="header">
           <Nav/>
           <br/>
           <div className="quote__container">
           <h1 className="quote__line1">Start your day with the </h1><h1 className="quote__line2">goodness of Yoga</h1>
           </div>
           
            
        </div>
    )
}

export default Header
