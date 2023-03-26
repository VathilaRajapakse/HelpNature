import React, {useState} from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateBlogs from './components/blogs_managment/CreateBlogs';
import DetailsBlogs from './components/blogs_managment/DetailsBlogs';
import EditBlogs from './components/blogs_managment/EditBlogs';
import Home from './components/blogs_managment/Home';
import BlogView from './components/blogs_managment/BlogView';
// import NavBar from './components/NavBar';


export default function App(){
 
    return(
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add"  element={<CreateBlogs/>}></Route>
          <Route path="/edit/:id"  element={<EditBlogs/>}></Route>
          <Route path="/post/:id"  element={<DetailsBlogs/>}></Route>
          <Route path="/details" element={<BlogView/>}></Route>
        </Routes>

      </BrowserRouter>
    )
  
}