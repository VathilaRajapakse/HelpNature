import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreatePost from './components/post_management/createPost';
import Create from './components/post_management/Create';
import Update from './components/post_management/updatePost';
// import Allpost from './components/post_management/Allpost';
import HomePost from './components/post_management/homePost';
import MyPosts from './components/post_management/myPosts';
import Login from './components/Login';

export default function App() {
    // const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<ViewPost/>} /> */}
              {/* <Route path="/allpost" element={<Allpost/>} /> */}
              
              <Route path="/home" element={<HomePost/>} />
              <Route path="/" element={<Login/>} />
              <Route path="/All" element={<CreatePost/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/update/:id" element={<Update/>} />
              <Route path="/changes" element={<MyPosts/>} />
           </Routes>     
      </BrowserRouter>

    )

}