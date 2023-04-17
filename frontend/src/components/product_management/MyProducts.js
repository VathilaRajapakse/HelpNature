import React, { useState, useEffect } from "react";
// import React, {Component} from 'react';
import axios from 'axios';
import "../styles/myproducts.css"
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";

import Card from "./Pcard"


// export default class MyProducts extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       products:[]
//     };

//   }


// componentDidMount(){
//   this.retrieveProducts()
// }

// retrieveProducts(){
//   axios.get("http://localhost:8080/products").then(res =>{
//     if(res.data.success){
//       this.setState({
//         products:res.data.existingProducts
//       });

//       console.log(this.state.products)
//     }
//   })
// }


// onDelete =(id) =>{
//   axios.delete(`http://localhost:8080/products/delete/${id}`).then((res) =>{
//     alert("deleted successfully");
//     this.retrieveProducts();
//   })
// }


//   render() {
//     return (
       
//       <div className="main-container">
//         <NavBar/>
//         <div>
//      <h1>PRODUCTS</h1>
        // <button className='addbtn'><a href='/add' style={{textDecoration:'none',color:'white'}}>Add New Products</a></button>
        // <br></br>&nbsp;&nbsp;

//                   <table className='table'>
//                         <thead>
//                           <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Product Name</th>
//                             <th scope="col">Product Description</th>
//                             <th scope="col">Product Price</th>
//                             <th scope="col">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {this.state.products.map((products,index) =>(

//                                   <tr>
//                                         <th scope="row">{index+1}</th>
//                                         <td>{products.productname}</td>
//                                         <td>{products.productdescription}</td>
//                                         <td>{products.productprice}</td>

//                                         <td>
//                                           <a className='btn btn-warning' href={`/edit/${products._id}`}>
//                                             <i className='fas fa-edit'></i>&nbsp;EDIT
//                                           </a>
//                                           &nbsp;
//                                           <a className='btn btn-danger' href="#" onClick={() =>this.onDelete(products._id)}>
//                                             <i className='far fa-trash-alt'></i>&nbsp;DELETE
//                                           </a>
//                                         </td>
//                                   </tr>

//                           ))}
//                         </tbody>
//                 </table>
//                 </div>
//                 <Sidebar/>
//       </div>
//     )
//   }
// } 



export default function Pro() {
  const [products, setproducts] = useState([]);

  //  const {id} = useParams();

   useEffect(() => {
       function getproducts() {
      
         axios.get(`http://localhost:8080/products/`)
           .then((res) => {
             console.log(res.data);
             setproducts(res.data.existingProducts);
           })
           .catch((err) => {
             alert(err.message);
           });
       }
       getproducts();
     }, []);


// useEffect(()=>{
//   axios.get(`http://localhost:8080/products/`+id)
//   .then((getDataa)=>{
     
//     setpname(getDataa.data.Products.productname);
//     setpd(getDataa.data.Products.productdescription);
//     setp(getDataa.data.Products.productprice);
//     console.log(getDataa)
  
//   })
// },[])
     



     return (
       <div className="main-container">
      <NavBar/>
      <button className='addbtn'><a href='/add' style={{textDecoration:'none',color:'white'}}>Add New Products</a></button>
        <br></br>&nbsp;&nbsp;
       <div className="card-track">
           
           {products.map((e, index) =>(
            <div>
              <Card productname={e.productname} productdescription={e.productdescription}  productprice={e.productprice} id={e.id}/> 
              <a className='btn btn-warning' href={`/edit/${e._id}`}>
//                                             <i className='fas fa-edit'></i>&nbsp;EDIT
//                                           </a>
</div>
           ))}
                  
           
         
       </div>
     <Sidebar/>
       </div>
     );
}
