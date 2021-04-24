import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container w-75 contact-container mb-5">
      <div className="row justify-content-left">
        <div className="col-md-8 offset-md-2 form  mt-5 mb-5 p-3">
          <h5 style={{ color: "#1CC7C1" }}>contact us </h5>
          <h2 className="text-light mb-5">Always connect with use</h2>

          <form action="" className="">
            <input
              className="form-control  p-3 form-group mb-2"
              type="email"
              name="email"
              placeholder="enter your email"
              required
              id=""
            />
            <input
              className="form-control p-3 form-group mb-2"
              type="text"
              name="subject"
              placeholder="subject"
              id=""
            />
            <textarea
              className="form-control form-group mb-2 px-3 "
              rows="4"
              placeholder="your message"
            ></textarea>
          </form>
          <button
            style={{
              backgroundColor: "#15D2C7",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            className="btn mt-3 text-light px-5"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
