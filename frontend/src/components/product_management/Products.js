/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
import Sidebar from "./Sidebar";
import "../styles/products.css"
import Card from "./Pcard"
// import Image from "../../image/logo.png";
 //import { useParams} from "react-router-dom";


export default function Allprojects() {
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
      <NavBar />

      <div className="card-track">
        {products.map((e, index) => (
          <div key={index}>
            <Card productname={e.productname} productprice={e.productprice} />
            <a href={`/det/${e._id}`}>
              <button type="button" className="btn1">
                VIEW
              </button>
            </a>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
      );
}


   









