import React from 'react'
import "../ProductStyle/InvestmentSection.css"
import Cardimage from "../Images/Cardimage.png"
const InvestmentSection = () => {
  return (
    <div id='investmentcontainer'>
      <div className='investbox' >
        <div className='investboxdiv' >
            <h1 style={{color:"#F3A61D",fontSize:"50px"}}>INVESTMENT STACK <h1 style={{color:"#171E27",fontSize:"50px",lineHeight:"10px"}}>for India</h1></h1>
            <p style={{color:"#171E27",fontSize:"42px",display:"inline-block"}}>Elevate Your Investment Strategy with Our <p style={{color:"#28B570",fontSize:"42px",display:"inline-block",lineHeight:"35px"}}>Comprehensive APIs</p> </p>
        </div>
        <div className='investboxdiv'>
            <p style={{color:"#171E27",fontSize:"36px"}}>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</p>
            <a href="">See our products</a>
            <button id='investboxbtn' >Contact Us</button>
        </div>

      </div>
      <div style={{marginTop:"200px"}}>
        <div className='card1' style={{display:"flex",width:"65%",height:"250px",margin:"auto",overflow:"hidden",padding:"50px 80px 0px 50px"
      }}>
        <div  style={{borderRadius:"50px",width:"600px",height:"500px",background:"linear-gradient(138deg, #74DB96 0%, #1DF5F4 99.91%)",marginRight:"-60px",transform: "rotate(-14.407deg)"}}>
            <img src={Cardimage} alt="" />
            <h3>Stocks</h3>
        </div>
        <div className='card2' style={{borderRadius:"50px",width:"600px",height:"500px",background:"linear-gradient(337deg, #C0CEED 0%, #CDBFD3 7.81%, #D100CE 31.77%, #FC583D 44.27%, #E5CCD1 71.35%, #FDD8D0 78.13%, #FA8A77 99.91%)",transform: "rotate(2.739deg)"}}>
            <img src={Cardimage} alt="" />
            <h3>Mutual Fund</h3>
        </div>
        <div className='card3' style={{borderRadius:"50px",width:"600px",height:"500px",background:"linear-gradient(85deg, #FEC974 0%, #FA8A77 99.91%)",marginLeft:"-60px",transform: "rotate(25.199deg)"}}>
            <img src={Cardimage} alt="" />
            <h3>Digital Gold</h3>
        </div>
        </div>

      </div>

      {/* <div style={{display:"flex",width:"50%",height:"200px",margin:"auto",border:"1px solid red",overflow:"hidden"
      }}>
        <div style={{width:"200px",height:"200px",background:"red",marginRight:"-60px",transform: "rotate(-14.407deg)"}}>p
            <img src={Cardimage} alt="" />
            <h3>Stocks</h3>
        </div>
        <div style={{width:"200px",height:"200px",background:"blue",transform: "rotate(2.739deg)"}}>
            <img src={Cardimage} alt="" />
            <h3>Mutual Fund</h3>
        </div>
        <div style={{width:"200px",height:"200px",background:"green",marginLeft:"-60px",transform: "rotate(25.199deg)"}}>
            <img src={Cardimage} alt="" />
            <h3>Digital Gold</h3>
        </div>
        </div> */}

    </div>
  )
}

export default InvestmentSection
