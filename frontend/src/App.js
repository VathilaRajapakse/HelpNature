import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


import AddProducts from './components/product_management/AddProducts';
import EditProducts from './components/product_management/EditProducts';
import MyProducts from './components/product_management/MyProducts';
import ProductDetails from './components/product_management/ProductDetails';
import Pcard from './components/product_management/Pcard';
import Products from './components/product_management/Products';



export default function App() {
    const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
             
       

           
              {/* <Route path="/" element={<MyProducts/>}></Route>             */}
              <Route path="/add" element={<AddProducts/>}></Route>
              <Route path="/edit" element={<EditProducts/>}></Route>
              <Route path="/det" element={<ProductDetails/>}></Route>

              <Route path="/car" element={<Pcard/>}></Route>

              <Route path="/" element={<Products/>}></Route>
            
          
           </Routes>     
      </BrowserRouter>

    )

}