import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



import Volunter from './components/project_management/Volunter';
import Allproject from './components/project_management/Allprojects';



export default function App() {
    const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
             
       

           
              <Route path="/" element={<Volunter/>}></Route>            
              <Route path="/All" element={<Allproject/>}></Route>
            
          
           </Routes>     
      </BrowserRouter>

    )

}
