import React from "react";

const FeedBackCard = ({ feedBack }) => {
  return (
    <div style={{ textAlign: "left" }} className="col-md-3 mx-1 mb-2 rounded shadow p-3">
      <div>
        <p>{feedBack.fed}</p>
      </div>
      <div  className="d-flex justify-content-left">
        <div>
          <img style={{height:'40px',
        }} src={feedBack.img} alt="" />
        </div>
        <div className="ms-4"  >
          <p  style={{color:'#1cc7c1'
        }} className="mb-0">{feedBack.name}</p>
          <small  style={{color:'#B4B4B4'
        }}>{feedBack.city}</small>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
