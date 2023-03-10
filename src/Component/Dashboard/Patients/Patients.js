import React, { useEffect, useState } from "react";
import DashBoardMain from "../Dashboard/DashboardMain/DashboardMain";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";


const Patients = () => {
  const [totalAppointments, setTotalAppoints] = useState([]);
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
  return (
    <div
      style={{ backgroundColor: "#F4FDFB" }}
      className="row  justify-content-around"
    >
      <div style={{ height: `${totalAppointments.length < 10 ? "100vh" : "auto"}` }} className="col-md-2 mb-5 sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-9 ">
        <h4 className=" ms-2 text-secondary mt-3">Patients</h4>
        <div className=" shadow mt-5 ">
          <div className=" mx-3 mt-3">
            <h5 className="text-color">All patients</h5>
          </div>
          <DashBoardMain totalAppointments={totalAppointments}></DashBoardMain>
        </div>
      </div>
    </div>
  );
};

export default Patients;
