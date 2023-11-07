import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom";




function Register(){
    const navi=useNavigate();
    const arr2=[]
    const[data,setData]=useState({
        name:"",
        email:"",
        password:"",
        phoneNo:"" ,
    })

const handleChange=(e)=>{
    e.preventDefault()
setData({...data,[e.target.name]:e.target.value});
};


const handleSubmit=(e)=>{
    e.preventDefault();
arr2.push(data)
    
        axios.post("https://react-handson4-backend.onrender.com/api/register",data)
       .then((res)=>{
        alert(res.data.msg)
         localStorage.setItem("token",res.data.token) 
         navi("/") 

    }
        )
       .catch((err)=>console.log(err))

 setData({
    name:"",
    email:"",
    password:"",
    phoneNo:"" ,
})
}
return(

<div>
<h2 id="heading">Register</h2>



<label id="font" htmlFor="name">Name:</label> 
<input  type="text" name="name" id="name" onChange={handleChange} minLength="1" placeholder="Enter your name" value={data.name} required></input> <br/><br/>

<label htmlFor="email">Email:  </label>
<input type="email" name="email" id="email" onChange={handleChange} placeholder="Enter your email" value={data.email} required/><br/><br/>

<label id="font" htmlFor="Password">Set Password:  </label>
<input type="password" maxLength="8" name="password" id="Password" onChange={handleChange} placeholder="Enter your password" value={data.password} required></input><br/><br/>

<label id="font" htmlFor="phoneNo">Phone.No:  </label>
<input type="number"  maxLength="10" name="phoneNo" id="phoneNo" onChange={handleChange} placeholder="Enter your phone.no" value={data.phoneNo} required></input> <br/><br/>


<button onClick={handleSubmit}>Submit</button>




</div>
    )
}



export default Register


