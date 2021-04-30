
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HeaderMainImage from "../../../images/Mask Group 1.png";

const AppointmentMain = ({ handleDate }) => {

  return (
    <div>
      <div className="row ms-2 pt-5 justify-content-around">
        <div className="col-xl-5 ml-5 mb-5">
          <h1 style={{textAlign:'left'}} className=" ms-2 mb-5" >Appointment</h1>
          <div>  <Calendar className="p-3" onChange={handleDate} value={new Date()} /></div>
         
        </div>
        <div className="col-xl-5 mb-5">
          <img src={HeaderMainImage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentMain;
