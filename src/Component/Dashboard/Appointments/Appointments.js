import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentData from "./AppointmentData/AppointmentData";
import "./Appointments.css";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDate = (date) => {
    setSelectedDate(date);

    fetch("http://localhost:4000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date }),
    })
    .then(res=>res.json())
    .then(appointment=>setAppointments(appointment))
  };
  console.log(appointments);

  return (
    <div>
      <div
        style={{ backgroundColor: "#F4FDFB" }}
        className="row  justify-content-around"
      >
        <div className="col-md-2 mb-5 sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-4  mt-3 mb-5">
          <h5 className="mb-3 text-center ">Appointment</h5>
          <Calendar
            className="p-3 m-auto  shadow "
            onChange={handleDate}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 mt-5 shadow">
          <AppointmentData date={selectedDate} appointments={appointments}></AppointmentData>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
