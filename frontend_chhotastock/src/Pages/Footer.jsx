import React from 'react'
import HomeLogo from "../Images/HomeLogo.png"
import GooglePay from "../Images/GooglePay.png"
import facebook from "../Images/facebook.png"
import youtube from "../Images/youtube.png"
import Instagram from "../Images/Instagram.png"
import twitter from "../Images/twitter.png"
const Footer = () => {
  return (
    <div style={{background: "#171E27",height:"auto",textAlign:"left",padding:"20px",marginTop:"100px"}}>
      <img src={HomeLogo} alt="" />
      <div style={{display:"flex",justifyContent:"space-between",width:"92%",margin:"auto"}}>
      <div >
            <p style={{color:"#F6F6F6",fontSize:"18px"}}>Contact Us</p>
            <p style={{color:"#F6F6F6"}}>8089225625</p>
            <p style={{color:"#F6F6F6"}}>contact@chhotastock.com</p>
        </div>
        <div >
            <p style={{color:"#F6F6F6",fontSize:"18px"}}>Company</p>
            <p style={{color:"#F6F6F6"}}>About Us</p>
            <p style={{color:"#F6F6F6"}}>Privacy policy</p>
            <p style={{color:"#F6F6F6"}}>Tems and Conditions</p>
        </div>
        
        <div >
            <p style={{color:"#F6F6F6",fontSize:"18px"}}>Quick Links</p>
            <p style={{color:"#F6F6F6"}}>Home</p>
            <p style={{color:"#F6F6F6"}}>Gateway</p>
            <p style={{color:"#F6F6F6"}}>Blog</p>
        </div>
        <div >
            <p style={{color:"#F6F6F6",fontSize:"18px"}}>Download App Now</p>
            <img src={GooglePay} alt="" />
        </div>

      </div>
      <div style={{width:"92%",margin:"auto",marginTop:"50px",marginBottom:'80px'}}>
        <p style={{fontSize:"20px",color:"#D9D9D9"}}>Find Us On</p>
        <div style={{display:"flex",gap:"20px"}}>
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={Instagram} alt="" />
            <img src={twitter} alt="" />
        </div>
      </div>
      <div style={{marginTop:"80px",width:"92%",margin:"auto"}}>
        <p style={{color:"#D9D9D9"}}>© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.<br/><br/>

Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes. <br/><br/>
Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing  Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India<br/><br/>

For any query / feedback / clarifications, email at contact@chhotastock.com<br/><br/>

All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments<br/>
in such baskets, portfolios.</p>
      </div>
    </div>

  )
}

export default Footer
