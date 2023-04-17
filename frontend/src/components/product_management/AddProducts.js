import React, { Component } from 'react'
import axios from 'axios';
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/addproducts.css"

export default class AddProducts extends Component {

  constructor(props){
    super(props);
    this.state={
      productname:"",
      productdescription:"",
      productprice:""
    }
  }


  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  onSubmit = (e) =>{
    e.preventDefault();

    const {productname,productdescription,productprice} = this.state;

    const data = {
      productname:productname,
      productdescription:productdescription,
      productprice:productprice
    }

    console.log(data)

    axios.post("http://localhost:8080/products/save",data).then((res) =>{
      if(res.data.success){
        alert("Create Success");
        this.setState(
          {
            productname:"",
            productdescription:"",
            productprice:""
          }
        )
      }
    })


  }



  render() {
    return (
      <div className='main-container'>
        <NavBar/>
              

        <div id="createlab" class="card-body bg-light">
          <h1>ADD NEW PRODUCT</h1>
          <div className='card'>
            <div className="col-md-8 mx-auto">
          
             
                    <form id="products" className="addproducts" >
                        <div className="productname" style={{marginBottom:"35px"}}>

                            <label style={{marginBottom:'5px'}}>PRODUCT NAME</label>
                            <input type="text"
                            className="form-control"
                            name="productname"
                            placeholder="Enter Product Name"
                            value={this.state.productname}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div className="productdescription" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>PRODUCT DESCRIPTION</label>
                            <input type="text"
                            className="form-control"
                            name="productdescription"
                            placeholder="Enter Product Description"
                            value={this.state.productdescription}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div className="productprice" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>PRODUCT PRICE</label>
                            <input type="text"
                            className="form-control"
                            name="productprice"
                            placeholder="Enter Product Price"
                            value={this.state.productprice}
                            onChange={this.handleInputChange}/>
                        </div>

                    </form>   
            </div>
            </div>
<br></br>
            <button className="sbtn" type="submit" id="myBtn2" style={{marginTop:'1px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; ADD PRODUCT
                        </button>
            </div>
            <Sidebar/>
      </div>
    )
  }
}
