import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import "../../styles/formedit.css";
import NavBar from "./Blogs_navBar";
import Sidebar from "./Sidebar";

export default function Update() {
  //const navigate = useNavigate();
  //const { posts, setposts } = useState();
  const { id } = useParams();
  const [blog_title, setblog] = useState("");
  const [description, setdes] = useState();
  
  useEffect(() => {
    axios.get(`http://localhost:8080/post/`+ id).then(
      (getData, res) => {
        setblog(getData.data.post.blog_title);
        setdes(getData.data.post.description);
    
        //console.log(getData.data.post.blog_title);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendDataToAPI = () => {
    const data = {
      blog_title,
      description,     
    };
    axios.put(`http://localhost:8080/post/update/${id}`, data)
      .then((res) => {
        alert("Update Successful");
        //navigate(-1);
      })
      .catch((err) => {
        alert("Update Unsuccessful");
      });
  };

  return (
    <div className="main-container">    
      <NavBar/>
      <div className="card-track">     
            <h3 className="blog-title-sub-edit">BLOGS</h3> 
            <h6 className="blog-title-sub-edit-2">Update Blogs</h6>

      <div className="dropdown" ></div>
      
      <form className="blog-edit-form">              
        
          <div className="blog-edit-item">
            <label className="blog-edit-label" for="name">
              Blog title
            </label>
            <input className="blog-edit-half-item"
                  type="text"
                  name="blog_title"
                  id="name1"
                  value={blog_title}
                  onChange={(e) => setblog(e.target.value)}
                  
                />
          </div>
          
          <div className="blog-edit-item">
            <label className="blog-edit-label" for="description">
              Description
            </label>
            <textarea className="blog-edit-half-item"
                  type="text"
                  id="description1"
                  name="description1"
                  value={description}
                  onChange={(e) => setdes(e.target.value)}
                
                />
          </div>
                   
          <button
              type="submit"
              className="blog-edit-btn"              
              onClick={sendDataToAPI}
            >
              Update
            </button>
      </form>
      </div>
      <Sidebar/>
    </div>
    
  );
}
