import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./project_management/ProjectNavBar";
import Sidebar from "./project_management/Sidebar";
import { useParams} from "react-router-dom";
import "./styles/project_css/navBar.css";

import "./styles/project_css/vform.css";

export default function Registration() {
   const [fullname, setFname] = useState([]);
   const [address, setAddress] = useState([]);
   const [contact, setContact] = useState([]);
   const [email, setemail] = useState([]);
   const [userName, setusername] = useState([]);
   const [password, setpassword] = useState([]);


 

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newmember ={
      fullname,
      address,
      contact,
      email,
      userName,
      password
            
    }
    
    //passing data to the DB
    axios.post("http://localhost:8080/register/save", newmember).then(()=>{

      alert("Registration successful",refreshPage());
      console.log(newmember);

    }).catch((err)=>{

      alert("Error: Registration unsuccessful");
      console.log(err);

    })

  }

       
    

  return (
    <div className="main-container">

      

        <NavBar />
        <div className="body-container clearfix">
     
        
        <form className="createVform" onSubmit={sendData}>   
        <div className='projectName-container'>
              <label for="fullName"><b>Full Name:</b></label> <br/>
              <input type="text" id="fullName"  className="valuesV"  name="fullName"  onChange={(event)=>{
                  setFname(event.target.value);
              }} required/>
              </div><br/>

              
           
           

              
              <div className='time-container'>
              <label for="address"><b>Address:</b></label> <br/>
              <input type="text" id="address" className="valuesV"    name="address"  onChange={(event)=>{
                  setAddress(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='location-container'>
              <label for="contact"><b>Contact No:</b></label> <br/>  
              <input type="text"  id="contact" className="valuesV"   name="contact"  onChange={(event)=>{
                  setContact(event.target.value);
              }} required/>
              </div><br/>

              <div className='discription-container'>
              <label for="nic"><b>Email:</b></label><br/> 
              <input type="text" id="email" className="valuesV" name="email"  onChange={(event)=>{
                  setemail(event.target.value);
              }} required/>
              </div><br/>



              <div className='discription-container'>
              <label for="userName"><b>User Name:</b></label><br/> 
              <input type="text" id="userName" className="valuesV" name="userName"  onChange={(event)=>{
                  setusername(event.target.value);
              }} required/>
              </div><br/>


              <div className='discription-container'>
              <label for="password"><b>Password:</b></label><br/> 
              <input type="text" id="password" className="valuesV" name="password"  onChange={(event)=>{
                  setpassword(event.target.value);
              }} required/>
              </div><br/>

              <input  type="submit" id="joinBtn"  value="Register"></input><br/><br/>
              <lable className="l1"><b>Click here to add you details.</b></lable><br/>
            
              </form>
        </div>
        

        <Sidebar />
    </div>
    

    );
}