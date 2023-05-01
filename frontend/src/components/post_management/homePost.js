import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import Card from "./postcard";
import "../../components/styles/post_css/homepost.css";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Allprojects() {
  const [posts, setPosts] = useState([]);
  // const [serQuary, setSerQuary] = useState("");
  // const [filteredBlogs, setFilteredBlogs] = useState([]);

  function refreshPage(){
    window.location.reload(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.existingPosts);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  // useEffect(() => {
  //   setFilteredBlogs(
  //     posts.filter(
  //       (post) =>
  //         post.blog_title.toLowerCase().includes(serQuary.toLowerCase())          
  //     )
  //   );
  // }, [posts, serQuary]);

  // function searchPosts(event) {
  //   setSerQuary(event.target.value);
  // }

  return (
    <div className="main1-container">
      <NavBar />
      <div className="card-track">
        <div className="testing">
          <h3 className="title-name" style={{ fontWeight: "bold" }} >
            POSTS
          </h3>
          <h3 className="title-name" style={{ fontWeight: "Medium" }} >
            What do you want to talk about?
          </h3>
          {/* <div className="search-Posts">
              <input
                onChange={searchPosts}
                type="search"
                placeholder="              Search"
                className="search-box-Posts"
              />
          </div> */}
        </div>
        <button className="post-create">
          <a href="/All" style={{ textDecoration: "none", color: "white" }}>
          + ADD NEW POSTS
          </a>
        </button>
        {posts.map((post, index) => (
          <Card key={index}  description={post.description} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
}