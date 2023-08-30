import React from 'react'
import "../HomeStyle/Frame6.css";
import Kotak from "../Images/Kotak.png"
import Angel from "../Images/Angel.png"
import Upstox from "../Images/Upstox.png"
import AMFI from "../Images/AMFI.png"
import Lendbox from "../Images/Lendbox.png"
import Liqui from "../Images/Liqui.png"
import Siply from "../Images/Siply.png"
import Jupiter from "../Images/Jupiter.png"
const Frame6 = () => {
  return (
    <div id='frame6container'>
      <div className='frame6box' >
        <div className='frame6leftbox' > 
            <p className='frame6ptag'>Some partners who make InvestPe products possible—</p>
        </div>
        <div className='frame6images' >
            <img width={"30%"} src={Kotak} alt="" />
            <img width={"30%"} src={Angel} alt="" />
            <img width={"30%"} src={Upstox} alt="" />
            <img  width={"15%"} src={AMFI} alt="" />
            <img  width={"15%"} src={Lendbox} alt="" />
            <img style={{marginLeft:"20px",marginBottom:"45px"}} width={"25%"} src={Liqui} alt="" />
            
        </div>
      </div>
      <div className='frame6box' >
        <div className='frame6boxtext' > 
            <p className='frame6ptag'>...and a few of the businesses building some incredible solutions with InvestPe</p>
        </div>
        <div style={{width:"60%",display:"flex",gap:"25px"}}>
            <div className='imgbackground'>
            <img  src={Siply} alt="" />
            </div>
            <div className='imgbackground'>
            <img  src={Jupiter} alt="" />
            </div>
            
            
        </div>
      </div>
      
    </div>
  )
}

export default Frame6
