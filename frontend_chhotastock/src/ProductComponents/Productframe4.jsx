import React from 'react'
import hand from "../Images/hand.png"
const Productframe4 = () => {
  return (
    <div id='frame4outer' style={{height:"auto",marginBottom:"100px"}}>
      <div id='frame4container' style={{width:"56%",height:"auto"}}>
        <h2>Connect your platform finances now with InvestPe Gateway</h2>
        <p>We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack</p>
          <div className='frame4btn' style={{display:"flex",justifyContent:"space-between",width:"50%",alignItems:"center"}}>
        <button style={{width:"auto" ,padding:"5px",fontWeight:"bold"}}>Try Investpe Now</button>
        </div>
      </div>
      <div  style={{marginTop:"265px",width:"40%",height:"300px",marginLeft:"-350px"}}>
        <img  width={"300px"} style={{position:"unset",marginLeft:"300px",
    transform: "rotate(1.0deg)",width:"530px",height:"365px"}} src={hand} alt="page1" />
        
      </div>

      
       
    </div>
  )
}

export default Productframe4
