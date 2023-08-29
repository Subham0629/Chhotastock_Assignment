import React from 'react'
import "../ProductStyle/Productframe3.css"
import prot1 from "../Images/prot1.png"
import tracking from "../Images/tracking.png"
import flexibility from "../Images/flexibility.png"
import easiness from "../Images/easiness.png"
const Productframe3 = () => {
  return (
    <div id='frame3container'>
      <div id='frame3left'>
        <p className='feature'>Features</p>
        <h5>Launch the most Engaging Invest-Tech Solutions</h5>
        <p className='para'>We offer a suite of B2B Invest-tech solutions, that are cost-effective way to offer an engaging investment experience to your customers, with a faster time to market</p>
        <div style={{display:"flex",justifyContent:"space-between",width:"80%",alignItems:"center"}}>
        <button style={{width:"auto",padding:"15px"}}>Get Started</button>
        <a style={{fontSize:"25px"}} href='#'>Learn More</a>
        </div>
        
      </div>
      
      <div id='frame3right'>
        <div style={{display:"flex",justifyContent:"space-around",gap:"20px"}}>
            <div className='prodframe3square'>
                <p className='firsthead'>Protection</p>
                <img src={prot1} alt="" />
                <p className='bottomhead'>Data protection guarentees</p>
            </div>
            <div className='prodframe3squareblue'>
                <p className='firsthead' style={{color:"#FFF"}}>Tracking</p>
                <img src={tracking} alt="" />
                <p className='bottomhead' style={{color:"#FFF"}}>Track all your users’ <br/>financial transactions</p>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",gap:"20px"}}>
            <div className='prodframe3square'>
                <p className='firsthead'>Flexibility</p>
                <img src={flexibility} alt="" />
                <p className='bottomhead'>Custom made for your requirements</p>
            </div>
            <div className='prodframe3square'>
                <p className='firsthead'>Easiness</p>
                <img src={easiness} alt="" />
                <p className='bottomhead'>Go-to market in less than 7 days</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Productframe3
