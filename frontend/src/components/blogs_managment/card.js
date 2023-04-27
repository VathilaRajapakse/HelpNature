import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeButton from "../blogs_managment/likebutton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../styles/card.css";

function Card(props) {
  // Use object destructuring to initialize state variables
  const [seeMore, setSeeMore] = useState(true);
  const [blogs, setBlogs] = useState([]);
  //const [userName, setUserName] = useState(localStorage.getItem("userName"));

  useEffect(() => {
    // Move function inside useEffect to prevent it from being called on every render
    async function getBlogs() {
      try {
        const response = await axios.get("http://localhost:8080/posts/");
        setBlogs(response.data.existingPosts);
      } catch (error) {
        alert(error.message);
      }
    }
    getBlogs(); // Call the function inside useEffect
  }, []); // Add an empty dependency array to run this effect only once on mount

  // Define the deleteData function
  // const deleteData = async (e) => {
  //   try {
  //     const confirmed = window.confirm("Are You Sure, You want to delete this ?");
  //     if (confirmed) {
  //       await axios.delete(`http://localhost:8080/post/delete/${e._id}`);
  //       window.location.reload(false);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <div>
      <div className="blogger-container">
        <AccountCircleIcon />
        <p>{props.blogger_name}</p>
      </div>

      <div className="card-container">
        {/* Use props to access data passed down from the parent component */}
        <div className="image-container">
          <img width="100%" src={`http://localhost:8080/get/image/${props.topic}`} alt={props.blog_title} />
        </div>
        <div className="topic-container">
          <h4>{props.topic}</h4>
        </div>
        <div className="description-container">
          {/* Use ternary operator to conditionally apply the "description" class */}
          <p className={seeMore ? "description" : ""}>{props.description}</p>
        </div>
        <div className="action-container">
          {/* Render the LikeButton component */}
          <LikeButton />
          <button className="Read-more" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "Read more" : "Less more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
