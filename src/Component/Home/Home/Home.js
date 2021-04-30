import React from "react";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import Artical from "../Artical/Artical";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import FeedBack from "../Feedback/FeedBack";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "../Services/Service";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Service></Service>
      <Artical></Artical>
      <AppointmentSection></AppointmentSection>
      <FeedBack></FeedBack>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
