import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom"
import Home from "../Component/Home"
import Register from "../Component/Form"
import LogIn from "../Component/Login"

export default function Links(){
    return(
      <>
       
       <BrowserRouter>
       
       <NavLink to={"/"}>LogIn</NavLink>
       <NavLink to={"/register"}>Register</NavLink>
       <NavLink to={"/home"}>Home</NavLink>

       <Routes>

        <Route path="/" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>

       </Routes>

    
       
       </BrowserRouter>

      </>
    )
}