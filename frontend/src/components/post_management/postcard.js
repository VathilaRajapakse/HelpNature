import React, { useState } from "react";
import Image from "../../image/sr.jpg";
import "../styles/post_css/postcard.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function procard(props) {
   // const [seeMore,setSeeMore]= useState(true)
  return ( 
    
      <div className="card-container">
       
        <div className="image-container">
          <img src={Image} alt="image" className="image" />
        </div>
        

        <div className="project-description-container">
          <p>{props.description}</p>
        </div>
        




        
       
        <div className="like-container">
          <label>Like</label>
         
        </div>
      </div>
   
  );
}

export default procard;