import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import { useParams} from "react-router-dom";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retriveTable.css";
//import "../styles/anushka_css/stylePrescription.css"


export default function Allprojects() {
   const [volunteers, setvolunteers] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        function getVolunteer() {
       
            axios.get(`http://localhost:8080/volunteer/`)
            .then((res) => {
              console.log(res.data);
              setvolunteers(res.data.existingvolunteer);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getVolunteer();
      }, []);

       //delete the somthing page is reffesh
       function refreshPage(){
        window.location.reload(false);
      }

      
      //delete data
      const deleteData = (e) => {
        var result = window.confirm("Do you wont to Delete?",refreshPage());
    
        if (result == true) {
            axios
            .delete(`http://localhost:8080/volunteer/delete/${e._id}`)
            .then((res) => {})
            .catch((e) => {
              alert(e);
            });
        } else {
          e.preventDefault();
        }
      };
    
      
        
    

  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

           
        {/* <div className='pet-name-container'>
              <label for="pet_name"><b>Patient Name(Pet):</b></label>  &nbsp;  
              <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                  setPetName(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='pet-name-container'>
              <label for="pet_name"><b>Patient Name(Pet):</b></label>  &nbsp;  
              <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                  setPetName(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='pet-name-container'>
              <label for="pet_name"><b>Patient Name(Pet):</b></label>  &nbsp;  
              <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                  setPetName(event.target.value);
              }} required/>
              </div><br/>

              
              <div className='pet-name-container'>
              <label for="pet_name"><b>Patient Name(Pet):</b></label>  &nbsp;  
              <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                  setPetName(event.target.value);
              }} required/>
              </div><br/> */}
           
        </div>

        <Sidebar />
    </div>

    );
}