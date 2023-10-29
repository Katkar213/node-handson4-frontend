import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom"
import Home from "../Component/Home"
import Register from "../Component/Form"
import LogIn from "../Component/Login"

export default function Links(){
    return(
      <>
       
       <BrowserRouter>
       <div className="navbar">
       <NavLink id="titlelink" to={"/home"}>Home</NavLink>
       <NavLink id="titlelink" to={"/"}>LogIn</NavLink>
       <NavLink id="titlelink" to={"/register"}>Register</NavLink>
      
        </div>
       <Routes>

        <Route path="/" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>

       </Routes>

    
       
       </BrowserRouter>

      </>
    )
}