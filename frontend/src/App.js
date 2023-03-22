import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
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
      <div>
        {this.state.products.map(Products =>(
          <div>
            <p>{Products.productname}</p>
            <p>{Products.productdescription}</p>
            <p>{Products.productprice}</p>
          </div>
        ))}
      </div>
    )
  }
} 