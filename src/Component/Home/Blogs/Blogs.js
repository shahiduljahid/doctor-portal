import React from "react";
import doctorPhoto1 from '../../../images/Ellipse 1.png'
import doctorPhoto2 from '../../../images/Ellipse 2.png'
import doctorPhoto3 from '../../../images/Ellipse 3.png'
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
  const blog = [
    {
      img:doctorPhoto2,
      name: "Dr jhon lenon",
      date: "23 april 2019",
      title: "2 times of brush in a day , can keep you healthy",
      des:
        "lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the",
    },
    {
        img:doctorPhoto3,
        name:'Dr caudi',
        date: '23 april 2019',
        title:'The tooth cancer is taking a challenge',
        des:'lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the'
    },
    {
        img:doctorPhoto1,
        name:'Dr Freddy',
        date: '23 april 2019',
        title:'The tooth cancer is taking a challenge',
        des:'lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the'
    }
  ];
  return <div className="container">
      <div className="col-md-12 mt-5 mb-5">
          <h5 style={{color:'#1CC7C1'}}>our Blogs</h5>
          <h1>From Our Blog News</h1>
      </div>
      <div className="col-md-12">
          <div className="row justify-content-center">
              {
                  blog.map(bg=><BlogCard blog={bg}></BlogCard>)
              }

          </div>
      </div>
  </div>;
};

export default Blogs;
