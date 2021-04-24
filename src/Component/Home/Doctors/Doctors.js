import React from "react";
import doctor from "../../../images/doctor.png";
import DoctorCard from "./DoctorCard/DoctorCard";

const Doctors = () => {
  const doctors = [
    {
      img: doctor,
      name: "Dr.caudi",
      phoneNumber: "+8617658080000",
    },
    {
        img:doctor,
        name:'Dr.caudi',
        phoneNumber:'+8617658080000',
    },
    {
        img:doctor,
        name:'Dr.caudi',
        phoneNumber:'+8617658080000',
    }
  ];
  return (
    <div className="container">
      <div className="col-md-12 mb-5 mt-5 pt-5">
        <h5 style={{ color: " #1CC7C1" }}>Our doctors</h5>
      </div>
      <div className="col-md-12">
        <div className="row justify-content-center">
            {
                doctors.map(doc=><DoctorCard doctor={doc}></DoctorCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
