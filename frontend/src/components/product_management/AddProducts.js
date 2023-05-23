import React, { Component, useState } from 'react'
import axios from 'axios';
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/addproducts.css"

export default function AddProducts() {

  const [productname, setProductname] = useState([]);
  const [productdescription, setproductdescription] = useState([]);
  const [productprice, setproductprice] = useState([]);
  const [fileUpload, setFileUpload] = useState([]);

  function sendData(s){
    s.preventDefault();

  
const newProduct ={
productname,
productdescription,
productprice


}




  // onSubmit = (e) =>{
  //   e.preventDefault();

  //   const {productname,productdescription,productprice} = this.state;

  //   const data = {
  //     productname:productname,
  //     productdescription:productdescription,
  //     productprice:productprice
  //   }

  //   console.log(data)

  //   axios.post("http://localhost:8080/products/save",data).then((res) =>{
  //     if(res.data.success){
  //       alert("Create Success");
  //       this.setState(
  //         {
  //           productname:"",
  //           productdescription:"",
  //           productprice:""
  //         }
  //       )
  //     }
  //   })


  // }
  const imageSave = new FormData();
    imageSave.append("products", fileUpload);

    axios.post("http://localhost:8080/products/save", newProduct).then(()=>{
      axios
        .post(`http://localhost:8080/upload/products/${productname}`, imageSave)
        .then((res) => {
          alert("Product successfully added");
        });
    });



  }
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
                            onChange={(event)=>{
                              setProductname(event.target.value);
                          }} required/>
                           
                        </div>
                        <div className="productdescription" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>PRODUCT DESCRIPTION</label>
                            <input type="text"
                            className="form-control"
                            name="productdescription"
                            placeholder="Enter Product Description"
                            onChange={(event)=>{
                              setproductdescription(event.target.value);
                          }} required/>
                        </div>
                        <div className="productprice" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>PRODUCT PRICE</label>
                            <input type="text"
                            className="form-control"
                            name="productprice"
                            placeholder="Enter Product Price"
                            onChange={(event)=>{
                              setproductprice(event.target.value);
                          }} required/>
                        </div>

                        <div>
                         
                            <input
                             className="chooseFile"
                             type="file"
                             name="choose file"
                             onChange={(e)=>{
                              setproductprice(e.target.files[0]);
                             }}
                            
                            />
                         
                        </div>
                        <input type="submit" id ="saveBtn" value="Submit"></input>

                    </form>   
            </div>
            </div>
<br></br>
            {/* <button className="sbtn" type="submit" id="myBtn2" style={{marginTop:'1px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; ADD PRODUCT
                        </button> */}
            </div>
            <Sidebar/>
      </div>
    )
  }

