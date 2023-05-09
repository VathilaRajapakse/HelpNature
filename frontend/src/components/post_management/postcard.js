import React, { useState,useEffect } from "react";
// import Image from "../../image/sr.jpg";
import LikeButton from "../LikeButton";
import "../styles/post_css/postcard.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function procard(props) {
   // const [seeMore,setSeeMore]= useState(true)
  const [seeMore, setSeeMore] = useState(true);
  const [posts, setPosts] = useState([]);

  return ( 
    
      <div className="card-container">     
       <div className="blogger-container">
        <AccountCircleIcon />
        <p>{props.username}</p>
      </div>      

            {/* <div className="project-description-container">
              <p>{props.description}</p>
            </div>

            <div className="image-container">
              <img src={Image} alt="image" className="image" />
            </div>
            

            <div className="like-container">
              <LikeButton />
            </div> */}

             {/* Use props to access data passed down from the parent component */}
        <div className="image-container">
          <img width="100%" src={`http://localhost:8080/get/image/${props.description}`} alt={props.username} />
        </div>
    
        <div className="description-container">
          {/* Use ternary operator to conditionally apply the "description" class */}
          <p className={seeMore ? "description" : ""}>{props.description}</p>
        </div>
        <div className="action-container">
          {/* Render the LikeButton component */}
          <LikeButton />
          
        </div>

      </div>
   
  );
}

export default procard;