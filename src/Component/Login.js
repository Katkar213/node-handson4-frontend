import React,{useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom";




function LogIn(){
    const arr2=[]
    const navi=useNavigate()
    const[data,setData]=useState({
        
        email:"",
        password:"",
       
    })


const handleChange=(e)=>{
    e.preventDefault()
setData({...data,[e.target.name]:e.target.value});
};


const handleSubmit=(e)=>{
    e.preventDefault();
    arr2.push(data)
    console.log(arr2)

  axios.post("https://react-handson4-backend.onrender.com/api/login",data)
 .then((res)=>{
    alert(res.data.msg)
     console.log(res.data.token)
     if(res.data.token){
    navi("/home")
     }
     else{
navi("/")
}})
 .catch((err)=>console.log(err))

 setData({
        
        email:"",
        password:"",
 })

};
    return(

<div>
<h2 id="heading">Log in</h2>





<label htmlFor="email">Email:  </label>
<input type="email" name="email" id="email" onChange={handleChange} placeholder="Enter your email" value={data.email}/><br/><br/>

<label id="font" htmlFor="Password"> Password:  </label>
<input type="password" maxLength="8" name="password" id="Password" onChange={handleChange} placeholder="Enter your password" value={data.password}></input><br/><br/>



<button onClick={handleSubmit}>Submit</button>
<NavLink to="/register">New user register first!</NavLink>
</div>
    )
}



export default LogIn


