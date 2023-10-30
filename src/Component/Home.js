import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';

function Home()
{
const navi=useNavigate();
const token=localStorage.getItem("token")
    console.log(token)

useEffect(()=>{
if(token){
    axios.get("https://react-handson4-backend.onrender.com/api/home",{header:{
    "authorization":`Bearer ${token}`
    }}).then((res)=>console.log(res.data))
}
else{
    navi("/")
}
},[token,navi])


const handleClick=()=>{
    localStorage.removeItem("token")
    navi("/")
}

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={handleClick}>LogOut</button>
       
        </>
    )
}
export default Home