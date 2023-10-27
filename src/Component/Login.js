import React,{useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom";



function LogIn(){
    const navi=useNavigate()
    const arr2=[]
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
    if(arr2.lenth!==0){
  axios.post("http://localhost:4001/api/login",data)
 .then((res)=>alert(res.data.msg))
 .catch((err)=>console.log(err))
navi("/home")
    }
    else{
        alert("enter valide data")
    }


 setData({
        
        email:"",
        password:"",
        
 })
 
};
    return(

<div>
<h1 id="heading">Log in</h1>





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


