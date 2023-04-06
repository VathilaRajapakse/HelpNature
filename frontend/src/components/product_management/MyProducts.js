import React, {Component} from 'react';
import axios from 'axios';
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";



export default class MyProducts extends Component {
  constructor(props){
    super(props);

    this.state={
      products:[]
    };

  }

componentDidMount(){
  this.retrieveProducts()
}

retrieveProducts(){
  axios.get("http://localhost:8080/products").then(res =>{
    if(res.data.success){
      this.setState({
        products:res.data.existingProducts
      });

      console.log(this.state.products)
    }
  })
}

  render() {
    return (
       
      <div > 

        <button className='btn btn-success'><a href='/add' style={{textDecoration:'none',color:'white'}}>Add New Products</a></button>



        


                  <table className='table'>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.products.map((products,index) =>(

                                  <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{products.productname}</td>
                                        <td>{products.productdescription}</td>
                                        <td>{products.productprice}</td>

                                        <td>
                                          <a className='btn btn-warning' href="#">
                                            <i className='fas fa-edit'></i>&nbsp;EDIT
                                          </a>
                                          &nbsp;
                                          <a className='btn btn-danger' href="#">
                                            <i className='far fa-trash-alt'></i>&nbsp;DELETE
                                          </a>
                                        </td>
                                  </tr>

                          ))}
                        </tbody>
                </table>

      </div>
    )
  }
} 