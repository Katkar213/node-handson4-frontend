import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function Home()
{
    const navi=useNavigate();
     const token=localStorage.getItem("token")
    useEffect(()=>{
     if(token){
        axios.get("https://react-handson4-backend.onrender.com/api/home")
     }
    })
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