import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div style={{textAlign:'left'}} className="col-md-3 mt-3 shadow mx-2 mb-2 p-4 rounded">

            <div className="d-flex mb-2 mt-2 justify-content-left">
                <div  className="me-3" >
                    <img style={{height:'40px'}} src={blog.img} alt="bloger" className="img-fluid "/>
                </div>
                <div>
                    <h6 style={{ color: " #39405" }}>{blog.name}</h6>
                    <small style={{ color: " #B4B4B4" }}>{blog.date}</small>
                
                </div>
            </div>
            <div>
                <h3 style={{ color: " #39405" }}>{blog.title}</h3>
                <p style={{ color: " #B4B4B4" }}>{blog.des}</p>
            </div>
            
        </div>
    );
};

export default BlogCard;