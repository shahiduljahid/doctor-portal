import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentData from "./AppointmentData/AppointmentData";
import "./Appointments.css";
import axios from "axios";


const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDate = async(date) => {
    setSelectedDate(date);
    const data= `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    try {
      const res = await axios.post(
        `https://doc-server-delta.vercel.app/appointments`,{data}
      );
      if (res.data) {
        console.log(res.data)
        setAppointments(res.data)
      }
    } catch (err) {
      console.log(err);
    }

  };


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
