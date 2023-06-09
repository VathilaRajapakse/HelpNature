/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/project_css/addproject.css";
import NavBar from "./ProjectNavBar";
import Sidebar from "./Sidebar";

export default function Update() {
  const { id } = useParams();
  const [projectName, setproname] = useState([]);
  //const [photo, setphoto] = useState([]);
  const [time, settime] = useState([]);
  const [location, setlocation] = useState([]);
  const [description, setdescription] = useState([]);
  const [fileUpload, setFileUpload] = useState();


  useEffect(() => {
    axios.get(`http://localhost:8080/project/`+id).then((res) => {
    
      setproname(res.data.project.projectName);
      settime(res.data.project.time);
      setlocation(res.data.project.location);
      setdescription(res.data.project.description);
    });
  }, []);

  const sendDataToAPI = () => {
    const data = {
      projectName,
      time,
      location,
      description
    };
    axios
      .put(`http://localhost:8080/project/update/${id}`, data)
      .then(() => {
        alert("Update Successful");
      })
      .catch(() => {
        alert("Update Unsuccessful");
      });

    if (fileUpload) {
      const imageSave = new FormData();
      imageSave.append("project", fileUpload);

      {
        axios
          .post(`http://localhost:8080/upload/project/${projectName}`, imageSave)
          .then(() => {});
      }
    }
  };

  return (
    <div className="main-container">

      

    <NavBar />
    <div className="body-container clearfix">
    <div className="n2"><b>Update project</b></div>

    <form className="createform">   
    <div className='projectName-container'>
          <label for="projectName"><b>project Name:</b></label> <br/>
          <input type="text" id="projectName"  className="values"  name="projectName" value={projectName} onChange={(event)=>{
              setproname(event.target.value);
          }} required/>
          </div><br/>

          
          {/* <div className='photo-container'>
          <label for="photo"><b>Choose Images</b></label>  &nbsp;  
          <input type="file" accept=".png, .jpg, .jpeg" id="photo"   name="photo"  onChange={(event)=>{
              setphoto(event.target.value);
          }} />
          </div><br/> */}

<input
              className="chooseFile"
              type="file"
              name="Choose file"
              onChange={(e) => {
                setFileUpload(e.target.files[0]);
              }}
            />
          
          <div className='time-container'>
          <label for="time"><b>start & End Time:</b></label> <br/>
          <input type="text" id="time" className="values"    name="time"
          value={time}  onChange={(event)=>{
              settime(event.target.value);
          }} required/>
          </div><br/>

          
          <div className='location-container'>
          <label for="location"><b>Location:</b></label> <br/>  
          <input type="text" id="location" className="values"   name="location" value={location} onChange={(event)=>{
              setlocation(event.target.value);
          }} required/>
          </div><br/>

          <div className='discription-container'>
          <label for="discription"><b>Discription:</b></label><br/> 
          <textarea type="textarea" id="discription" className="values1" name="discription" value={description} onChange={(event)=>{
              setdescription(event.target.value);
          }} required/>
          </div><br/>

          <button
            type="submit"
            className="blog-edit-btn"
            onClick={sendDataToAPI}
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
