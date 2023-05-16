import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



import Volunter from './components/project_management/Volunter';
import Allproject from './components/project_management/Allprojects';
import Addproject from './components/project_management/Addproject';
import VForm from './components/project_management/VForm';
import Register from './components/registration';
import Login from './components/Login';
import PUpdate from './components/project_management/updatepro'


export default function App() {
    const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
             
       

              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Volunter" element={<Volunter/>}></Route>            
              <Route path="/All" element={<Allproject/>}></Route>
              <Route path="/" element={<Addproject/>}></Route>
              <Route path="/vform" element={<VForm/>}></Route>
              <Route path="/Register" element={<Register/>}></Route>
              <Route path="/PUpdate/:id" element={<PUpdate/>}></Route>
     
           </Routes>     
      </BrowserRouter>

    )

}
