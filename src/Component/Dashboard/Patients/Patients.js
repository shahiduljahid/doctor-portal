import React, { useEffect, useState } from "react";
import DashBoardMain from "../Dashboard/DashboardMain/DashboardMain";
import Sidebar from "../Sidebar/Sidebar";

const Patients = () => {
  const [totalAppointments, setTotalAppoints] = useState([]);
  useEffect(() => {
    fetch("https://morning-wave-67009.herokuapp.com/totalAppointments")
      .then((res) => res.json())
      .then((data) => {
        setTotalAppoints(data);
      });
  }, []);
  return (
    <div
      style={{ backgroundColor: "#F4FDFB" }}
      className="row  justify-content-around"
    >
      <div className="col-md-2 mb-5 sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-9 ">
          <h4  className=" ms-2 text-secondary mt-3">Patients</h4>
        <div className=" shadow mt-5 " >
         
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
