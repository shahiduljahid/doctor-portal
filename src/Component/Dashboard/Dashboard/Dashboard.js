import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [totalAppointment, setTotalAppoints] = useState([]);
  useEffect(async() => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/totalAppointments`
      );
      if (res.data) {
        console.log(res.data)
        setTotalAppoints(res.data);   
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  let totalAppointmentLength = totalAppointment.length;
  totalAppointmentLength =
    totalAppointmentLength > 9
      ? totalAppointmentLength
      : "0" + totalAppointmentLength;

  return (
    <div
      style={{ backgroundColor: "#F4FDFB" }}
      className="row  justify-content-around"
    >
      <div style={{ height: `${totalAppointment.length < 10 ? "100vh" : "auto"}` }}  className="col-md-2 mb-5 sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 mt-3 mb-5">
        <div>
          <h5 className="mb-3 dashboard-title text-weight-bold  ">Dashboard</h5>
        </div>
        <div className="row text-center  book-btn   justify-content-between">
          <div className="col-md-3 rounded mb-5">
            <div
              style={{ backgroundColor: "#F1536E" }}
              className="d-flex justify-content-center    rounded py-3 px-5"
            >
              <h1>{totalAppointmentLength}</h1>
              <div style={{ textAlign: "left" }} className="ms-3 ">
                <p className="m-0">pending</p>
                <p className="m-0 ">Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 rounded mb-5 ">
            <div
              style={{ backgroundColor: "#3DA5F4" }}
              className="d-flex  justify-content-center rounded py-3 px-5"
            >
              <h1>{totalAppointmentLength}</h1>
              <div style={{ textAlign: "left" }} className="ms-3">
                <p className="m-0">Today's</p>
                <p className="m-0 ">Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 rounded mb-5">
            <div
              style={{ backgroundColor: "#00C689" }}
              className="d-flex justify-content-center  rounded py-3 px-5"
            >
              <h1>{totalAppointmentLength}</h1>
              <div style={{ textAlign: "left" }} className="ms-3">
                <p className="m-0">Total</p>
                <p className="m-0 ">Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 rounded mb-5">
            <div
              style={{ backgroundColor: "#FDA006" }}
              className="d-flex justify-content-center rounded py-3 px-5"
            >
              <h1>{totalAppointmentLength}</h1>
              <div style={{ textAlign: "left" }} className="ms-3">
                <p className="m-0">Total</p>
                <p className="m-0 ">Patiens</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 shadow">
          <div className=" mx-3 mt-3">
            <h5 className="text-color">Appointments</h5>
          </div>
          <DashboardMain totalAppointments={totalAppointment}></DashboardMain>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
