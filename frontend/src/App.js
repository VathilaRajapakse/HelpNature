import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



import CreatePost from './components/post_management/createPost';
import ViewPost from './components/post_management/viewPost';
import Create from './components/post_management/Create';
import Update from './components/post_management/updatePost';
// import Allpost from './components/post_management/Allpost';
import HomePost from './components/post_management/homePost';

export default function App() {
    // const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
             
       

           
              <Route path="/" element={<ViewPost/>}></Route>            
              <Route path="/All" element={<CreatePost/>}></Route>
              <Route path="/create" element={<Create/>}></Route>
              <Route path="/update/:id" element={<Update/>}></Route>
              {/* <Route path="/allpost" element={<Allpost/>}></Route> */}
              <Route path="/homePost" element={<HomePost/>}></Route>
            
            
            
          
           </Routes>     
      </BrowserRouter>

    )

}