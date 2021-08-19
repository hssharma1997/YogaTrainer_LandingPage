import React from 'react'
import Humburgericon from './icons/Humburgericon.png' 
import './Nav.css'

function Nav() {
    return (
      <>
        <div class="dropdown">
        <button class="btn  " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={Humburgericon} className="burger__icon"/>
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item active" href="#">Offerings</a></li>
          <li><a class="dropdown-item" href="#">Other Links</a></li>
          <li><a class="dropdown-item" href="#">Testimonials</a></li>
    
          <li><a class="dropdown-item" href="#">Portfolio</a></li>
          <li><a class="dropdown-item" href="#">Contact Me</a></li>
          <li><a class="dropdown-item" href="#">Book Trial</a></li>
        </ul>
      </div>
      <div className="horizontal__nav">
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link"  href="#">Offerings</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Other Links</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Testimonials</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Portfolio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Contact me</a>
  </li>
  <li class="nav-item">
    <a class="nav-link special" href="#" >Book Trial</a>
  </li>
</ul>
      </div>
      
</>
    )
}

export default Nav
