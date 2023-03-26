import React, {Component} from 'react';
import{BrowserRouter,Route} from 'react-router-dom'
import CreateBlogs from './components/blogs_managment/CreateBlogs';
import DetailsBlogs from './components/blogs_managment/DetailsBlogs';
import EditBlogs from './components/blogs_managment/EditBlogs';
import Home from './components/blogs_managment/Home';
import BlogView from './components/blogs_managment/BlogView';
// import NavBar from './components/NavBar';


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      {/* <NavBar/> */}
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" exact component={CreateBlogs}></Route>
          <Route path="/edit/:id" exact component={EditBlogs}></Route>
          <Route path="/post/:id" exact component={DetailsBlogs}></Route>
          <Route path="/details" exact component={BlogView}></Route>
        </div>

      </BrowserRouter>
    )
  }
}