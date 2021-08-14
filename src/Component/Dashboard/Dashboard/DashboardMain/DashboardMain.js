import React from "react";
import "./DashboardMain.css";

const DashBoardMain = ({ totalAppointments }) => {
  const handleDate = (date) => {
    // const dateFormate = date.split("T");

    // return dateFormate[0];

    const newDate = new Date(date).getDate();
    const newMonth = new Date(date).getMonth()+1;
    const newYear = new Date(date).getFullYear();

    let dateLength = newDate;
    dateLength = dateLength > 9 ? dateLength : "0" + dateLength;

    const fullDate = `${dateLength}-${newMonth}-${newYear}`;
    return fullDate;
  };
  const handleTime = (time) => {
    const timeFormate = time.split("-");

    return timeFormate[0];
  };

  return (
    <div className="row">
      <div className="px-5">
        <table className="table table-borderless h7 rounded">
          <thead className=" p-1 ">
            <tr>
              <th className="text-secondary serial-number " scope="col">
                sr.no
              </th>
              <th className="text-secondary" scope="col">
                Date
              </th>
              <th className="text-secondary" scope="col">
                time
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary contact" scope="col">
                contact
              </th>
              <th className="text-secondary" scope="col">
                Action
              </th>
            </tr>
          </thead>
          {totalAppointments.map((apm, index) => {
            return (
              <tbody>
                <tr>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold serial-number"
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold "
                  >
                    {handleDate(apm.date)}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold"
                  >
                    {handleTime(apm.schedule)}
                  </td>

                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold"
                  >
                    {apm.name}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold contact"
                  >
                    {apm.phoneNumber}
                  </td>
                  <td className="text-weight-bold">
                    {" "}
                    <button
                      style={{ fontWeight: "bold" }}
                      className="btn book-btn btn-color"
                    >
                      {apm.action}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default DashBoardMain;
