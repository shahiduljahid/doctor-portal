import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Component/Home/Home/Home";
import Appointment from "./Component/Appointment/Appointment";
import Appointments from "./Component/Dashboard/Appointments/Appointments";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";
import Patients from "./Component/Dashboard/Patients/Patients";
import Prescriptions from "./Component/Dashboard/Prescriptions/Prescriptions";
import AddDoctors from "./Component/Dashboard/AddDoctors/AddDoctors";
import Settings from "./Component/Dashboard/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/appointments">
            <Appointments></Appointments>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/patients">
           <Patients></Patients>
          </Route>
          <Route path="/prescription">
           <Prescriptions></Prescriptions>
          </Route>
          <Route path="/adddoctors">
            <AddDoctors></AddDoctors>
          
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
