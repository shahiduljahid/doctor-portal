import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light pt-5">
  <div class="container-fluid">

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li class="nav-item pe-5">
          <Link class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item pe-5">
          <Link class="nav-link" >About</Link>
        </li>
        <li class="nav-item pe-5">
          <Link class="nav-link" >Dental services</Link>
        </li>
        <li class="nav-item pe-5">
          <Link class="nav-link navigation  text-light" >Reviews</Link>
        </li>
        <li class="nav-item pe-5">
          <Link class="nav-link navigation text-light" >Blogs</Link>
        </li>
        <li class="nav-item pe-5">
          <Link class="nav-link navigation text-light" >Contact us</Link>
          
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;