import React from 'react';

const DoctorCard = ({doctor}) => {
    return (
      <div className="col-md-4 mb-5">
          <img style={{height:'300px'}} src={doctor.img} alt="doctor" className="img-fluid"/>
          <h5 style={{fontWeight:'bold'}} className="mt-2">{doctor.name}</h5>
          <small className="mt-1 ">{doctor.phoneNumber}</small>


      </div>
    );
};

export default DoctorCard;