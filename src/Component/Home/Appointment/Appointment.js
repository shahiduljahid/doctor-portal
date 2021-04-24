import React from "react";
import "./Appointment.css";
import doctor from "../../../images/doctor.png";
const Appointment = () => {
  return (
    <div className="container  pt-5 pb-5 offset-md-2">
      <div className="row  justify-content-left m-auto ">
        <div className="col-md-4 appointment-container  ">
          <img
            style={{ height: "500px"}}
            className="img-fluid doctor"
            src={doctor}
            alt="doctor"
          />
        </div>
        <div style={{ textAlign: "left", zIndex: "2" }} className="col-xs-10 col-md-5 apointmentInfo">
          <h5 style={{ color: " #1CC7C1" }} className="mt-3 mb-2">
            APPOINTMENT
          </h5>
          <h1 className="text-white">Make an appointment </h1>
          <h1 className=" text-white mb-2">Today</h1>
         <p className="text-white">Lorem ipsum dolor sit amet consectetur,ditate adipisci sed repudiandae architecto exercitationem, necessitatibus vel, natus, accusamus eveniet tempora non quasi eius.</p>

          <button
            style={{
              backgroundColor: "  #1CC7C1",
              color: "white",
              fontWeight: "bold",
              alignItems: "left",
            }}
            className="btn mt-3"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
