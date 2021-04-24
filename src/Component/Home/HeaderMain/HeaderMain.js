import React from "react";
import HeaderMainImage from "../../../images/Mask Group 1.png";
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <div className="row mt-5 pt-5 ">
      <div style={{ textAlign: "left" }} className="col-md-4 mt-3 offset-md-1 HeaderInfo">
        <h1 className="pb-2" style={{ color: "#3A4256" }}>
          Your New smile <br />
          Starts here
        </h1>
        <p style={{ color: "#B4B4B4" }} className="pb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          excepturi expedita consequuntur sint quas, unde ullam sequi animi
          consequatur dolores.
        </p>
        <button
          style={{
            backgroundColor: "#1CC7C1",
            color: "white",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          className="btn "
        >
          Get appointment
        </button>
      </div>
      <div className="col-md-6  mt-3">
        <img src={HeaderMainImage} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
