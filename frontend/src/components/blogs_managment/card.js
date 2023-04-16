import React, { useState, useEffect } from "react";
import "../../styles/card.css";
import Image from "../../image/Wild.png";
import axios from "axios";
import LikeButton from "../blogs_managment/likebutton";


function Card(props) {
    const [seeMore,setSeeMore]= useState(true)
    const [blogs, setblogs] = useState([]);
    const [userName, setUserName] = useState(localStorage.getItem('userName'));



    useEffect(() => {
      function getblogs() {
     
        axios.get(`http://localhost:8080/posts/`)
          .then((res) => {
            console.log(res.data);
            setblogs(res.data.existingPosts);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getblogs();
    }, []);

    //refresh page
    function refreshPage(){
      window.location.reload(false);
    }

    //delete data
    const deleteData = (e) => {
      var result = window.confirm("Are You Sure, You want to delete this ?",refreshPage());
  
      if (result === true) {
        axios
          .delete(`http://localhost:8080/post/delete/${e._id}`)
          .then((res) => {})
          .catch((e) => {
            alert(e);
          });
      } else {
        e.preventDefault();
      }
    };

    async function likePost(postId) {
      try {
        const response = await fetch(`/api/posts/${postId}/like`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data.message); // Post liked successfully!
      } catch (err) {
        console.error(err);
      }
    }



  return ( 
    <div> 
      <div className="auth-name">
      {userName ? `${userName}`:""}
      </div>

      <div className="card-container">
             
        <div className="image-container">
          <img src={Image} alt="image" className="image" />
        </div>
        <div className="topic-container">
          <h4>{props.topic}</h4>
        </div>
        <div className="description-container">
          <p className={seeMore&&"description"}>
            {props.description}
          </p>
        </div>
        <div className="action-container">
          {/* <label>Like</label> */}
          <LikeButton/>
          <button className="Read-more"onClick={()=> setSeeMore(!seeMore)}>{seeMore?"Read more":"Less more"}</button>       
        </div>
        
      </div>
      </div>
   
  );
}

export default Card;