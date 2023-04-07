import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
// import "../../styles/formedit.css";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/post_css/update.css";

export default function Update() {
  //const navigate = useNavigate();
  //const { posts, setposts } = useState();
  const { id } = useParams();
  
  const [description, setdes] = useState();
  const [photo, setphto] = useState();
  
  useEffect(() => {
    axios.get(`http://localhost:8080/post/`+ id).then(
      (getData, res) => {
        
        setdes(getData.data.posts.description);
        setphto(getData.data.posts.photo);
    
        
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendDataToAPI = () => {
    const data = {
    
      description,  
      photo   
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
            <h3 className="post-title-sub-edit">POST</h3> 
            <h6 className="post-title-sub-edit-2">Update Posts</h6>

      <div className="dropdown" ></div>
      
      <form className="post-edit-form">              
        
          
          
          <div className="post-edit-item">
            <label className="post-edit-label" for="description">
              Description
            </label>
            <textarea className="post-edit-half-item"
                  type="text"
                  id="description2"
                  name="description2"
                  value={description}
                  onChange={(e) => setdes(e.target.value)}
                
                />
          </div>
                   
          <button
              type="submit"
              className="post-edit-btn"              
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