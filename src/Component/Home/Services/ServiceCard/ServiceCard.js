import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-3 mb-2 mt-2">
      <img
        style={{ height: "50px" }}
        className="img-fluid mb-2"
        src={service.img}
        alt="service"
      />
      <h6 style={{ color: " #39405" }} className="pb-3">
        {service.title}
      </h6>
      <small style={{ color: " #B4B4B4" }} className="px-2">
        {service.des}
      </small>
    </div>
  );
};

export default ServiceCard;
