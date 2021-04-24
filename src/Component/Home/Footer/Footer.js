import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div style={{ textAlign: "left" }} className="row justify-content-center footer-container">
        <div className="col-md-3 mb-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h5 style={{ color: "#15D2C7" }}>Services</h5>
            </li>
            <li className="nav-item">Emargency dental care</li>
            <li className="nav-item">Check up</li>
            <li className="nav-item">Treatment of personal diseases</li>
            <li className="nav-item">tooth extraction</li>
            <li className="nav-item">check up</li>
          </ul>
        </div>
        <div className="col-md-3 mb-5">
          {" "}
          <ul className="navbar-nav">
            <li className="nav-item">
              <h5 style={{ color: "#15D2C7" }}>oral health</h5>
            </li>
            <li className="nav-item">Emargency dental care</li>
            <li className="nav-item">Check up</li>
            <li className="nav-item">Treatment of personal diseases</li>
            <li className="nav-item">tooth extraction</li>
            <li className="nav-item">check up</li>
          </ul>
        </div>
        <div className="col-md-3 mb-5">
          {" "}
          <ul className="navbar-nav">
            <li className="nav-item">
              <h5 style={{ color: "#15D2C7" }}>our cares</h5>
            </li>
            <li className="nav-item">Emargency dental care</li>
            <li className="nav-item">Check up</li>
            <li className="nav-item">Treatment of personal diseases</li>
            <li className="nav-item">tooth extraction</li>
            <li className="nav-item">check up</li>
          </ul>
        </div>
        <div className="col-md-3 mb-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h5 style={{ color: "#15D2C7" }}>Our address</h5>
            </li>
            <li className="nav-item mb-3">NewYork-101010 huson yard</li>
            <li className="nav-item">
              <FontAwesomeIcon
                style={{ fontSize: "20px", color: "#15D2C7" }}
                className=" me-3  "
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                style={{ fontSize: "20px", color: "#15D2C7" }}
                className=" me-3  "
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ fontSize: "20px", color: "#15D2C7" }}
                className=" me-3  "
                icon={faGooglePlusG}
              />
            </li>

            <li className="nav-item mb-1 mt-5">call now</li>
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#15D2C7",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
                className="btn text-light"
              >
                +861765808
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
