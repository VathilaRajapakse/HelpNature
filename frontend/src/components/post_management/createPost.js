import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/post_css/post.css";

export default class CreateBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      photo: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { description, photo } = this.state;

    const data = {
      description: description,
      photo: photo,
    };

    console.log(data);

    axios.post("http://localhost:8080/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          description: "",
          photo: "",
        });
        alert(" successfully Posted");
      }
    });
  };

  render() {
    return (
      <div className="main-container">
        <NavBar />

        <div>
        <h3 className="title-name" style={{ fontWeight: "bold" }} >
            Create New Post<br></br>
            <a href="/" class="previous">&laquo; Back</a>
            <i class="fas fa-angle-left"></i>
          </h3>
          <form className="post-form">
            <div className="post-item">
              <label className="post-label" htmlFor="description">
                Say something about this photo
              </label>
              <textarea
                className="post-half-item"
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="post-item">
              <label className="post-label" htmlFor="photo">
                Photo
              </label>
              <input
                className="post-half-item"
                type="file"
                id="photo"
                name="photo"
                accept=".png, .jpg, .jpeg"
                value={this.state.photo}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-post"
              onClick={this.onSubmit}
            >
              POST
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    );
  }
}
