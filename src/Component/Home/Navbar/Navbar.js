import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-5">
  <div class="container-fluid">

    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto text-center  mb-2 mb-lg-0">
        <li className="nav-item pe-5">
          <Link to={'/home'} className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item pe-5">
          <Link to={'/dashboard'} className="nav-link" >Dashboard</Link>
        </li>
        <li className="nav-item pe-5">
          <Link to={'/appointment'} className="nav-link" >Dental services</Link>
        </li>
        <li className="nav-item pe-5">
          <Link className="nav-link navigation  " >Reviews</Link>
        </li>
        <li className="nav-item pe-5">
          <Link className="nav-link navigation" >Blogs</Link>
        </li>
        <li className="nav-item pe-5">
          <Link className="nav-link navigation " >Contact us</Link>
          
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;