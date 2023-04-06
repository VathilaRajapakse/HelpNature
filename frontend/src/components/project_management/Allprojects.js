import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./ProjectNavBar";
import Sidebar from "./Sidebar";
import { useParams} from "react-router-dom";
import "../styles/project_css/navBar.css";
//import "../styles/project_css/common.css";
//import "../styles/project_css/header.css";
//import "../styles/project_css/retriveTable.css";
//import "../styles/anushka_css/stylePrescription.css"
import Procard from "./procard"
import "../styles/project_css/allproject.css"


export default function Allprojects() {
   const [project, setproject] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        function getVolunteer() {
       
            axios.get(`http://localhost:8080/project/`)
            .then((res) => {
              console.log(res.data);
              setproject(res.data.existingProject);
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


    
      
        
    

  return (
    <div className="main1-container">

        <NavBar />
      
        <div>
      
        </div>
       
        <div className="card-track">
            
            {project.map((e, index) =>(
               <Procard projectName={e.projectName} description={e.description}  time={e.time}  location={e.location} /> 
            ))}
           
        </div>
        
        <Sidebar />
    </div>

    );
}