import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.css";

const BookingCard = ({ book , date}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
   
      <div className="col-xl-3 mx-2 mb-5 rounded shadow p-3 text-center ">
        <h3 className="text-color">{book.subject}</h3>
        <p style={{ color: "#3A4256", fontWeight: "bold" }}>
          {book.visitingHour}
        </p>
        <small style={{ color: "#3A4256" }}>
          {book.totalSpace} space available
        </small>
        <br />
        <button
          onClick={openModal}
          style={{ fontWeight: "bold" }}
          className="btn book-btn btn-color mb-2 mt-2"
        >
          Book Appointment
        </button>
        <AppointmentForm modalIsOpen={modalIsOpen} visit={book.visitingHour} date={date} name={book.subject} closeModal={closeModal} ></AppointmentForm>
      </div>
     
  
  );
};

export default BookingCard;
