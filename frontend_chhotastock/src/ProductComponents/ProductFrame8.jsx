import React from 'react'
import "../ProductStyle/ProductFrame8.css"
const ProductFrame8 = () => {
  return (
    <div id='Productframe8container'>
        <div  style={{width:"100%"}}>
        <h5 style={{fontSize:"42px"}}>How would you like to work with us?</h5>
        <p style={{fontSize:"30px",color:"#474747",marginTop:"-25px"}}>Tell us more about yourself, and we’ll<br/> reach out to you as soon as possible.</p>
        </div>
      <div className='forms'>
        <div>
        <form>
      <p style={{color:"#474747",fontSize:"24px",marginBottom:"-3px"}} htmlFor="workEmail">Work Email:</p >
      <input style={{borderRadius:'10px',width:"488px",height:"40px",marginBottom:"60px"}} placeholder='abc@xyz.com' type="email" id="workEmail" name="workEmail" required /><br />

      <p style={{color:"#474747",fontSize:"24px",marginBottom:"-3px"}} htmlFor="companyName">Company Name:</p>
      <input style={{borderRadius:'10px',width:"488px",height:"40px",marginBottom:"60px"}} type="text" id="companyName" name="companyName" required /><br />

      <p style={{color:"#474747",fontSize:"24px",marginBottom:"-3px"}} htmlFor="mobileNumber">Mobile Number:</p>
      <input style={{borderRadius:'10px',width:"488px",height:"40px",marginBottom:"40px"}} type="tel" id="mobileNumber" name="mobileNumber" required /><br />

    </form>
        </div>
        <div>
            <p style={{fontSize:"24px"}}>Which products are you interested in?</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
        <div className='formbox'>
                <p style={{fontSize:"24px"}}>Mutual Funds</p>
                <p style={{color:'#888',fontSize:"18px"}} >E2E infrastructure for mutual fund investing</p>
            </div>
            <div className='formbox'>
                <p style={{fontSize:"24px"}}>Indian Equity</p>
                <p style={{color:'#888',fontSize:"18px"}} >Stock gateway &
stock baskets</p>
            </div><div className='formbox'>
                <p style={{fontSize:"24px"}}>Digital Gold</p>
                <p style={{color:'#888',fontSize:"18px"}} >Buy & Sell digital gold hassle free</p>
            </div><div className='formbox'>
                <p style={{fontSize:"24px"}}>Fixed Deposits</p>
                <p style={{color:'#888',fontSize:"18px"}} >Book FDs in 1click w/o opening 
a bank ac</p>
            </div>
            </div>
    </div>
      </div>
    </div>
  )
}

export default ProductFrame8
