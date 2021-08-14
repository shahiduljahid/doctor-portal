import React, { createContext, useState } from "react";
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
import Login from './Component/Login/Login'
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Practice from "./Component/Practice";

export const userContext = createContext();

function App() {
  const [loggedInUser ,setLoggedInUser] =useState([])
  return (
    <userContext.Provider value={[loggedInUser ,setLoggedInUser ]}>
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/appointments">
            <Appointments></Appointments>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/patients">
           <Patients></Patients>
          </PrivateRoute>
          <PrivateRoute path="/prescription">
           <Prescriptions></Prescriptions>
          </PrivateRoute>
          <PrivateRoute path="/adddoctors">
            <AddDoctors></AddDoctors>
          
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <Settings></Settings>
          
          </PrivateRoute>
          <Route path="/P">
            <Practice></Practice>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        
        </Switch>
      </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
