import React, { useState,useEffect } from "react";
import "../styles/pcard.css";
import Image from "../../image/pen.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";



function Card(props) {
  



    
  const {id}  = useParams();

  
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${props.id}`).then(
      (getData, res) => {
        // setblog(getData.data.post.blog_title);
        // setdes(getData.data.post.description);
    
        //console.log(getData.data.post.blog_title);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ( 
    <div className="main-container">
      <div className="card-container">
        <div className="image-container">
          <img src={Image} alt="image" className="image" />
        </div>

        <div className="pname">
          <h4>{props.productname}</h4>
        </div>

        <div className="product-des-container">
          <h4>{props.productdescription}</h4>
        </div>

        <div className="product-price-container">
          <h4>{props.productprice}</h4>
        </div>
      
        {/* <a href= {`/det/${props._id}`}>
        <button type="button" class="btn1" >VIEW</button>
        </a> */}
        


        
      </div>
      </div>
  );
}

export default Card;






