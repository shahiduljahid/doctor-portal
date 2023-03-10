import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faCalendarWeek, faCog, faFileAlt, faUserFriends, faUserPlus ,faHome} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div  className="d-flex justify-content-center ">
      <ul className="navbar-nav mt-5  ">
        <li className="nav-item nav-link mb-3 ">
          <Link to={'/dashboard'} style={{ textDecoration: "none" }}>
            <span className="book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faWindows} /> Dashboard
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3  ">
          <Link  to={'/appointments'} style={{ textDecoration: "none" }}>
            <span className="book-btn text-bold">
              <FontAwesomeIcon style={{fontSize:'20px'}} className="me-3" icon={faCalendarWeek} /> Appointments
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3 ">
          <Link  to={'/patients'} style={{ textDecoration: "none" }}>
            <span className="book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faUserFriends} /> Patients
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3 ">
          <Link  to={'/Prescription'} style={{ textDecoration: "none" }}>
            <span className="book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faFileAlt} /> Prescriptions
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3 ">
          <Link  to={'/home'} style={{ textDecoration: "none" }}>
            <span className="book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faHome} /> Home
            </span>
          </Link>
        </li>
     
      </ul>
    </div>
  );
};

export default Sidebar;
