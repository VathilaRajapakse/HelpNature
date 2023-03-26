import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Blogs_navBar";
import Sidebar from "./Sidebar";
import Card from "./card";
import "../../styles/home.css";
import "../../styles/navBar.css";
import "../../styles/common.css";
import "../../styles/header.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Allprojects() {
  const [blogs, setBlogs] = useState([]);
  const [serQuary, setSerQuary] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  function refreshPage(){
    window.location.reload(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts/")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data.existingPosts);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter(
        (blog) =>
          blog.blog_title.toLowerCase().includes(serQuary.toLowerCase())          
      )
    );
  }, [blogs, serQuary]);

  function searchBlogs(event) {
    setSerQuary(event.target.value);
  }

  return (
    <div className="main1-container">
      <NavBar />
      <div className="card-track">
        <div className="testing">
          <h3 className="title-name" style={{ fontWeight: "bold" }} >
            BLOGS
          </h3>
          <div className="search-blogs">
              <input
                onChange={searchBlogs}
                type="search"
                placeholder="              Search"
                className="search-box-blogs"
              />
          </div>
        </div>
        <button className="blog-create">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
          + BECOME A BLOGGER
          </a>
        </button>
        {filteredBlogs.map((blog, index) => (
          <Card key={index} topic={blog.blog_title} description={blog.description} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
}