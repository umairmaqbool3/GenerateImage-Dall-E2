import React from 'react'
import './App.css';
import { useNavigate } from "react-router-dom";

function MainScreen(){
    const navigate = useNavigate();
  return (
    <div className='main-dev'>
      <button className='main-page-buttons' 
        onClick={()=>navigate("/mainchat")}
      >ChatGPT</button>
      <button className='main-page-buttons'
        onClick={()=>navigate("/generateimage")}
      >Generate Image</button>
    </div>
  )
}


export default MainScreen;