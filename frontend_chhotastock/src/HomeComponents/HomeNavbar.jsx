import React from 'react'
import HomeLogo from "../Images/HomeLogo.png";
import Login from "../Images/Login.png";
import '../HomeStyle/HomeNavbar.css';
import {  useNavigate } from 'react-router-dom';
const HomeNavbar = () => {
  const navigate  =useNavigate();
  const handleClick=()=>{
    navigate('/product');
  }
  return (
    <div style={{background:"#171E27",display:"flex",justifyContent:"space-around",
    position:"sticky",top:"0",zIndex:"1",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      <img id='Homelogo' src={HomeLogo} alt='HomeLogo'/>
      <input className='white' type="text" placeholder='Search stocks, ETFs, indices'/>
      <button onClick={handleClick}><img src={Login} alt='Login'/>Login</button>
    </div>
  )
}

export default HomeNavbar
