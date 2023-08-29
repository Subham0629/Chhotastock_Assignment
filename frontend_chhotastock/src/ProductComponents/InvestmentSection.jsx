import React from 'react'
import "../ProductStyle/InvestmentSection.css"
import Cardimage from "../Images/Cardimage.png"
const InvestmentSection = () => {
  return (
    <div id='investmentcontainer'>
      <div style={{display:"flex",justifyContent:"space-between",gap:"15px"}}>
        <div style={{width:"50%"}}>
            <h1 style={{color:"#F3A61D",fontSize:"50px"}}>INVESTMENT STACK <h1 style={{color:"#171E27",fontSize:"50px",lineHeight:"10px"}}>for India</h1></h1>
            <p style={{color:"#171E27",fontSize:"42px",display:"inline-block"}}>Elevate Your Investment Strategy with Our <p style={{color:"#28B570",fontSize:"42px",display:"inline-block",lineHeight:"10px"}}>Comprehensive APIs</p> </p>
        </div>
        <div style={{width:"50%"}}>
            <p style={{color:"#171E27",fontSize:"36px"}}>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</p>
            <a href="">See our products</a>
            <button style={{width:"auto",marginTop:"15px"}}>Contact Us</button>
        </div>

      </div>
      <div style={{marginTop:"200px"}}>
        <div style={{display:"flex",width:"600px",height:"200px",margin:"auto"}}>
        <div className='card1' style={{overflow:"hidden"}}>
            <img src={Cardimage} alt="" />
            <h3>Stocks</h3>
        </div>
        <div className='card2'>
            <img src={Cardimage} alt="" />
            <h3>Mutual Fund</h3>
        </div>
        <div className='card3'>
            <img src={Cardimage} alt="" />
            <h3>Digital Gold</h3>
        </div>
        </div>
      </div>

    </div>
  )
}

export default InvestmentSection
