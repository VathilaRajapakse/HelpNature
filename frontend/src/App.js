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
         <p>ALL PRODUCTS</p>
        
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Product Description</th>
              <th scope='col'>Product Price</th>
              <th scope='col'>Product Price</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>

      </div>
    )
  }
} 