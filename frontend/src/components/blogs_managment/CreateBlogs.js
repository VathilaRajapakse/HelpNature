import React from "react";
import axios from "axios";
import NavBar from "./Blogs_navBar";
import Sidebar from "./Sidebar";
import "../../styles/form.css";
// import "../styles/common.css";
// import "../styles/retrieveTable.css";
// import "../styles/vathila_css/inventory.css";
// import NavBar from "./MedNav";
// import { Link } from "react-router-dom";

export default class CreateBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        blogger_name:"",
        blog_title: "",
        description: "",
      
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  
  onSubmit = (e) => {
    e.preventDefault();

    const {
        blogger_name,
        blog_title,
        description,
     
    } = this.state;

    if (blog_title.trim().length === 0) {
      alert("blog title cannot be empty !");
    } else if(description.trim().length===0){
      alert("description cannot be empty !");
    } else if(blogger_name.trim().length===0){
      alert("name cannot be empty !");
    }
    const data = {
        blogger_name:blogger_name,
        blog_title: blog_title,
        description: description,
    };

    console.log(data);

    axios
      .post("http://localhost:8080/post/save", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            blogger_name:"",
            blog_title: "",
            description: "",
            
          });
          alert("Blog successfully added");
        }
      });
    };
    render() {
        return (
          <div className="main-container">
            
            <NavBar/>  
            <div className="card-track">     
            <h3 className="blog-title-sub">BLOGS</h3> 
            <h6 className="blog-title-sub-2">Create Blogs</h6>
            <form className="blog-form">   
                <div className="blog-item">
                  <label className="blog-label" for="name">
                    Blogger name
                  </label>
                  <input
                    className="blog-half-item"
                    type="text"
                    name="blogger_name"
                    id="name"
                    value={this.state.blogger_name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>                       
                <div className="blog-item">
                  <label className="blog-label" for="name">
                    Blog title
                  </label>
                  <input
                    className="blog-half-item"
                    type="text"
                    name="blog_title"
                    id="name"
                    value={this.state.blog_title}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                
                <div className="blog-item">
                  <label className="blog-label" for="description">
                    Description
                  </label>
                  <textarea
                    className="blog-half-item"
                    type="text"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                         
              <button
                  href="/"
                  type="submit"
                  className="btn-blog"                 
                  onClick={this.onSubmit}
                  navigateTo = {'/'}
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
    
    


