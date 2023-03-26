/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Blogs_navBar";
import "../../styles/home.css";
import "../../styles/navBar.css";
// import "../../styles/common.css";
// import "../../styles/header.css";
import Image from "../../image/Wild.png";
import Sidebar from "./Sidebar";
import Card from "./card";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";

export default function Allprojects() {
  const [blogs, setBlogs] = useState([]);
  const [deleteBlog, setDeleteBlog] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data.existingPosts);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function handleDeleteBlog(blog) {
    setBlogToDelete(blog);
    setDeleteBlog(true);
  }

  async function confirmDeleteBlog() {
    try {
      await axios.delete(`http://localhost:8080/post/delete/${blogToDelete._id}`, {});
      setDeleteBlog(false);
      setBlogToDelete(null);
      setBlogs(blogs.filter((blog) => blog._id !== blogToDelete._id));
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="main1-container">
      <NavBar />
      <div className="card-track"> 
        <h3 className="title-name">BLOGS</h3>
        {blogs.map((blog, index) => (
          <div key={index}>
            <Card topic={blog.blog_title} description={blog.description} />
            <a className="btn btn-warning" href={`/edit/${blog._id}`}>
              <i className="fas fa-edit"></i>&nbsp;Edit
            </a>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={() => handleDeleteBlog(blog)}>
              Delete
            </Button>
          </div>
        ))}
        
      </div>
      <Dialog open={deleteBlog} onClose={() => setDeleteBlog(false)}>
        <DialogTitle>Warning!</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the blog?
        </DialogContent>
        <DialogActions>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button variant="contained" onClick={() => confirmDeleteBlog()} autoFocus color="secondary">
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Sidebar/>
    </div>
  );
}
