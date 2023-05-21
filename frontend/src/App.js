import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreateBlogs from './components/blogs_managment/CreateBlogs';
import DetailsBlogs from './components/blogs_managment/DetailsBlogs';
import EditBlogs from './components/blogs_managment/EditBlogs';
import Home from './components/blogs_managment/Home';
import BlogView from './components/blogs_managment/BlogView';
import Registration from './components/registration';
import Login from './components/bloglogin';
// import NavBar from './components/NavBar';
import Protected from './components/auth/protected';

import Volunter from './components/project_management/Volunter';
import Allproject from './components/project_management/Allprojects';
import Addproject from './components/project_management/Addproject';
import VForm from './components/project_management/VForm';
import Login from './components/Login';
import PUpdate from './components/project_management/updatepro'


export default function App() {
 
    return(

      <BrowserRouter>

        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog/add"  element={<Protected><CreateBlogs/></Protected>}></Route>
          <Route path="/edit/:id"  element={<EditBlogs/>}></Route>
          <Route path="/post/:id"  element={<DetailsBlogs/>}></Route>
          <Route path="/details" element={<BlogView/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/Login" element ={<Login/>}></Route>
             
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Volunter" element={<Volunter/>}></Route>            
          <Route path="/All" element={<Allproject/>}></Route>
          <Route path="/proadd" element={<Addproject/>}></Route>
          <Route path="/vform" element={<VForm/>}></Route>
          <Route path="/PUpdate/:id" element={<PUpdate/>}></Route>
        </Routes> 
              
      </BrowserRouter>

    )

}
