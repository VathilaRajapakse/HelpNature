/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
// import "../../styles/home.css";
import "../styles/navBar.css";
// import "../../styles/common.css";
// import "../../styles/header.css";
// import Image from "../../image/Wild.png";
import Sidebar from "./Sidebar";
import Card from "./postcard";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";

export default function Allprojects() {
  const [posts, setPosts] = useState([]);
  const [deletePost, setDeletePost] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/post/`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.existingPosts);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function handleDeletePost(post) {
    setPostToDelete(post);
    setDeletePost(true);
  }

  async function confirmDeletePost() {
    try {
      await axios.delete(`http://localhost:8080/post/delete/${postToDelete._id}`, {});
      setDeletePost(false);
      setPostToDelete(null);
      setPosts(posts.filter((post) => post._id !== postToDelete._id));
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="main1-container">
      <NavBar />
      <div className="card-track"> 
        <h3 className="title-name">POST</h3>
        {posts.map((post, index) => (
          <div key={index}>
            <Card  description={post.description} />
            <a className="btn btn-warning" href={`/update/${post._id}`}>
              <i className="fas fa-edit"></i>&nbsp;Edit
            </a>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={() => handleDeletePost(post)}>
              Delete
            </Button>
          </div>
        ))}
        
      </div>
      <Dialog open={deletePost} onClose={() => setDeletePost(false)}>
        <DialogTitle>Warning!</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the post?
        </DialogContent>
        <DialogActions>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button variant="contained" onClick={() => confirmDeletePost()} autoFocus color="secondary">
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Sidebar/>
    </div>
  );
}