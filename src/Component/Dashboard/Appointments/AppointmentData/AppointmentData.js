import React from "react";

const AppointmentData = ({ appointments, date }) => {
  return (
    <div className="row">
      <div className="d-flex  mx-2 mt-2 justify-content-between">
        <h5 className="text-color">Appointments</h5>
        <p className="text-secondary">{date.toDateString()}</p>
      </div>
      <div className="px-5">
        <table className="table table-borderless h7 rounded">
          <thead className=" p-1 ">
            <tr>
              <th className="text-secondary" scope="col">Name</th>
              <th className="text-secondary"  scope="col">Schedule</th>
              <th className="text-secondary"  scope="col">Action</th>
            </tr>
          </thead>
          {appointments.map((apm) => {
            return (
             
                <tbody>
                  <tr>
                   
                    <td style={{fontWeight: "bold"}} className="text-weight-bold">{apm.name}</td>
                    <td style={{fontWeight: "bold"}}  className="text-weight-bold">{apm.schedule}</td>
                    <td className="text-weight-bold" > <button style={{fontWeight: "bold"}}  className="btn book-btn btn-color">{apm.action}</button></td>
                  </tr>
                </tbody>
         
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AppointmentData;
