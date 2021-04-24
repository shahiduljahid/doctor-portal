import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import InfroCard from "../InfoCard/InfoCard";
import "./Header.css";

import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const info = [
    {
      icon: faClock,
      title: "Opening Hours",
      des: "lorem ipsum is simply dummy text of the pri",
      background: "primary",
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit our location",
      des: "lorem ipsum is simply dummy text of the pri",
      background: "dark",
    },
    {
      icon: faPhoneAlt,
      title: "Contact us now",
      des: "lorem ipsum is simply dummy text of the pri",
      background: "primary",
    },
  ];
  return (
    <div className="Header-container container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <div className="  ">
        <div
          className="row  justify-content-center mt-3 mb-5 pb-5
             pt-5"
        >
          {info.map((data) => (
            <InfroCard info={data}></InfroCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
