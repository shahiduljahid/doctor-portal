import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import AppointmentMain from "./ApointmentMain/AppointmentMain";
import "./Appointment.css";
import BookApppointment from "./BookAppointment/BookApppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDate = (date) => {
    setSelectedDate(date);
   
  };
  return (
    <div className="container">
      <div className="appointment-header">
        <Navbar></Navbar>
        <AppointmentMain handleDate={handleDate}></AppointmentMain>
        
      </div>
      <BookApppointment date={selectedDate}></BookApppointment>

      <Footer></Footer>
    </div>
  );
};

export default Appointment;
