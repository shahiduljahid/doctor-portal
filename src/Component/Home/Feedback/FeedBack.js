import React from "react";
import photo1 from "../../../images/Ellipse 1.png"
import photo2 from "../../../images/Ellipse 2.png"
import photo3 from "../../../images/Ellipse 3.png"
import FeedBackCard from "./FeedbackCard/FeedBackCard";

const FeedBack = () => {
  const feedBack = [
    {
      fed:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit",
       img:photo1,
       name:'Winson harry',
       city:'California'

    },
    {
        fed:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit",
         img:photo2,
         name:'Winson harry',
         city:'California'
  
      },
      {
        fed:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem ipsum, dolor sit amet consectetur adipisicing elit",
         img:photo3,
         name:'Winson harry',
         city:'California'
  
      }
  ];

  return (
    <div className="container">
      <div className="row mb-5 mt-2  offset-md-1">
        <div style={{ textAlign: "left" }} className="col-md-12">
          <h5 style={{ color: " #1CC7C1" }} className="mt-3 mb-2">
            TESTIMONIAL
          </h5>
          <h2 className="text-dark ">What's Our Patients</h2>
          <h2 className="text-dark mb-2">Says</h2>
        </div>

        <div className="col-md-12 mt-5 mb-5 pb-3">
            <div className="row  justify-content-left">
            {
                feedBack.map(fed =><FeedBackCard feedBack={fed}></FeedBackCard>)
            }
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
