import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import { useParams} from "react-router-dom";
import "../styles/navBar.css";
// import "../styles/common.css";
import "../styles/header.css";
import "../styles/retriveTable.css";
//import "../styles/anushka_css/stylePrescription.css"
import "../styles/post_css/addpost.css";

export default function Allprojects() {
   
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
       
        description
       
    }
    
    //passing data to the DB
    axios.post("http://localhost:8080/post/save", newproject).then(()=>{

      alert("post  is successful",refreshPage());
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
        <form className="createpostform" onSubmit={sendData}>   
        
              

              <div className='discription-container'>
              <label for="discription"><b>Discription:</b></label><br/> 
              <input type="text" id="discription" className="values1" name="discription"  onChange={(event)=>{
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