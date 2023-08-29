import React from 'react'
import "../ProductStyle/Productframe5.css"
import boximage1 from "../Images/boximage1.png"
import Dashboard from "../Images/Dashboard.png"
import Star from "../Images/Star.png"
import FDBooked from "../Images/FDBooked.png"
import  {IoMdCheckmarkCircleOutline}  from "react-icons/io";
const Productframe5 = () => {
  return (
    <div id='productframe5container'>
      <div id='frame3left' style={{width:"100%"}}>
        <p className='feature'>Features</p>
        <h5>Stay ahead with our <br/>
Wealth-tech as a service</h5>
        </div>
        <div className='prodframe5resp' >
        <div >
            <div style={{display:"flex",gap:"20px",height:"auto"}}>
                <div id='boxes1'>
                    <img src={boximage1} alt="" />
                    <p>INVESTPE</p>
                    <h3>Why does it make sense to start with us?</h3>
                </div>
                <div id='boxes2' style={{display:"flex",padding:"10px"}}>
                    <div>
                    <h3 style={{color:"#7C59CF",fontSize:"30px"}}>We value your precious time.</h3>
                    <p className='ptag'>No regulatory licenses required as we have everything for you to get started.</p>
                    </div>
                    <img src={Dashboard} alt="" />
                </div>
            </div>

            <div style={{display:"flex",gap:"20px",height:"auto",marginTop:"20px"}}>
                <div id='boxes3'>
                    <p>MUTUAL FUNDS</p>
                    <h3 style={{color:"#7C59CF",fontSize:"20px"}}>Get the complete MF Infra
                    & focus on customer engagement</h3>
                    <IoMdCheckmarkCircleOutline/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>SEBI compliant KYC process</p>
                    <br/>
                    <IoMdCheckmarkCircleOutline/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Multi-AMC empanelments</p>
                    <br/>
                    <IoMdCheckmarkCircleOutline/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Transact & Track orders</p>
                    <br/>
                    <IoMdCheckmarkCircleOutline/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Advanced reporting</p>
                </div>
                <div id='boxes4' style={{padding:"10px"}}>
                <p>Indian Equity</p>
                    <h3 style={{color:"#7C59CF",fontSize:"20px"}}>One gateway for all top securities</h3>
                    <IoMdCheckmarkCircleOutline />
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Enable stocks, ETFs & expert curated stock baskets in your app</p>
                    <br/>
                    <IoMdCheckmarkCircleOutline/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Integrates with all major brokers</p>
                    <br/>
                    <p style={{display:"inline-block",marginLeft:"5px",fontSize:"18px"}}>Offer expert curated & monitored stock basket solutions</p>
            </div>
            </div>

            

        </div>
        <div className='sidebox' style={{width:"auto",height:"auto",textAlign:"left"}}>
            <div style={{padding:"10px"}}>
            <img src={Star} alt="" />
            <p style={{color:"#7C59CF"}}>Fixed Deposits</p>
            <h3 style={{color:"#7C59CF"}}>Fully digital FDs for your users</h3>
            <p>Offer fixed deposits on your app or website, from multiple banks. Embed a pre-built SDK and go live in weeks.</p>
            </div>
            <img src={FDBooked} alt="" />
            </div>
        </div>
        <hr style={{color:"gray",width:"95%",margin:"auto",marginTop:"80px",marginBottom:"80px"}}/>
    </div>
  )
}

export default Productframe5
