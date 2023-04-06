import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./ProjectNavBar";
import Sidebar from "./Sidebar";
import { useParams} from "react-router-dom";
import "../styles/project_css/navBar.css";
import "../styles/project_css/common.css";
import "../styles/project_css/header.css";
import "../styles/project_css/retriveTable.css";
import "../styles/project_css/addproject.css";

export default function Allprojects() {
   const [projectName, setproname] = useState([]);
   const [photo, setphoto] = useState([]);
   const [time, settime] = useState([]);
   const [location, setlocation] = useState([]);
   const [description, setdescription] = useState([]);

 

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newproject ={
        projectName,
        photo,
        time,
        location,
        description
       
    }
    
    //passing data to the DB
    axios.post("http://localhost:8080/project/save", newproject).then(()=>{

      alert("project  is successful",refreshPage());
      console.log(newproject);

    }).catch((err)=>{

      alert("Error: project not added");
      console.log(err);

    })

  }

       
    

  return (
    <div className="main-container">

      

        <NavBar />
        <div className="body-container clearfix">
        <div className="n2"><b>Create New project</b></div>
        <form className="createform" onSubmit={sendData}>   
        <div className='projectName-container'>
              <label for="projectName"><b>project Name:</b></label> <br/>
              <input type="text" id="projectName"  className="values"  name="projectName"  onChange={(event)=>{
                  setproname(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='photo-container'>
              <label for="photo"><b>Choose Images</b></label>  &nbsp;  
              <input type="file" accept=".png, .jpg, .jpeg" id="photo"   name="photo"  onChange={(event)=>{
                  setphoto(event.target.value);
              }} />
              </div><br/>

              
              <div className='time-container'>
              <label for="time"><b>start & End Time:</b></label> <br/>
              <input type="text" id="time" className="values"    name="time"  onChange={(event)=>{
                  settime(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='location-container'>
              <label for="location"><b>Location:</b></label> <br/>  
              <input type="text" id="location" className="values"   name="location"  onChange={(event)=>{
                  setlocation(event.target.value);
              }} required/>
              </div><br/>

              <div className='discription-container'>
              <label for="discription"><b>Discription:</b></label><br/> 
              <textarea type="textarea" id="discription" className="values1" name="discription"  onChange={(event)=>{
                  setdescription(event.target.value);
              }} required/>
              </div><br/>
              <input  type="submit" id="saveBtn"  value="SUBMIT"></input>
              </form>
        </div>
        

        <Sidebar />
    </div>
    

    );
}