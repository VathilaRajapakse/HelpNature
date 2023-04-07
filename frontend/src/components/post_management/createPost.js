import React from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/post_css/post.css";
// import "../styles/common.css";
// import "../styles/retriveTable.css";
// import "../styles/vathila_css/inventory.css";
// import NavBar from "./MedNav";
// import { Link } from "react-router-dom";

export default class CreateBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
        description: "",
      
    };
  }
  handleInputChange = (e) => {
    const { name,photo, value,va } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
      [photo]: va,
    });
  };

  
  onSubmit = (e) => {
    e.preventDefault();

    const {
     
        description,
        photo,
     
    } = this.state;

   
    const data = {
       
        description: description,
        photo: photo,
    };

    console.log(data);

    axios
      .post("http://localhost:8080/post/save", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
           
            description: "",
            photo: ""
            
          });
          alert(" successfully Posted");
        }
      });
    };
    render() {
        return (
          <div className="main-container">
            
            <NavBar/>
            
            {/* <div className="postTitle-name" >POSTS</div> */}
            
            <div>
            <form className="post-form">              
              
               
                
                <div className="post-item">
                  <label className="post-label" for="postdescription">
                    Description
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
                  <label className="post-label" for="photo">
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
                  href="/"
                  type="submit"
                  className="btn-post"                 
                  onClick={this.onSubmit}
                >
                  SUBMIT
                </button>
            </form>
            </div>
            <Sidebar/>
          </div>
          
        );
      }
    }