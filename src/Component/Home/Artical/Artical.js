import React from "react";
import articalBanner from "../../../images/artical.png";

const Artical = () => {
  return (
    <div className="container">
      <div className="row  mt-5 mb-5 justify-content-left">
        <div className="col-md-3 offset-md-1 mb-3 col-sm-8  text-center">
          <img
            style={{ height: "400px", width: "100%" }}
            className="img-fluid "
            src={articalBanner}
            alt="articalBanner"
          />
        </div>
        <div style={{ textAlign: "left" }} className="col-md-5 mt-5">
          <h1 style={{ color: " #39405" }}>Exceptional Dental </h1>
          <h1 style={{ color: " #39405" }}>care, on Your Terms</h1>

          <p style={{ color: " #B4B4B4" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            aut temporibus nam qui autem delectus unde fuga architecto sit
            earum? Atque, minus hic! Atque distinctio dignissimos quidem
            deleniti, blanditiis officiis nobis tempore necessitatibus, vero aut
            exercitationem omnis nulla illum quae.
          </p>
          <button
            style={{
              backgroundColor: "  #1CC7C1",
              color: "white",
              fontWeight: "bold",
            }}
            className="btn mt-5"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artical;
