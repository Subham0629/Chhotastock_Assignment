import React, { useState } from 'react'
import HomeLogo from "../Images/HomeLogo.png";
import RedDot from "../Images/RedDot.png";
import Mutual from "../Images/Mutual.png";
import Equity from "../Images/Equity.png";
import Gold from "../Images/Gold.png";
import Star from "../Images/Star.png";
import Market from "../Images/Market.png";
import Historical from "../Images/Historical.png";
import "../ProductStyle/ProductNavbar.css"
const ProductNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
console.log(isDropdownOpen)
  return (
    <div style={{position:"sticky",top:"0",zIndex:"1"}}>
      <div style={{background:"#171E27",display:"flex",
      justifyContent:"space-around",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      <div style={{display:"flex",alignItems:"center"}}>
      <img id='Homelogo' src={HomeLogo} alt='HomeLogo'/>
      <button style={{background:"#FDECEC",color:"#F05656",width:"auto"}}>Gateway <img style={{width:"23px",height:"23px",marginLeft:"8px"}}  src={RedDot} alt="" /></button>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"60px"}}>
<div className="dropdown">
      <button className="dropbtn" style={{background:"#171E27",color:"#FFF",border:'0px',fontSize:"30px"}} onClick={toggleDropdown}>
      Products
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content" >
          <div className="dropdown-item">
            <h3 style={{color:'#28B570',fontSize:"24px"}}>INVESTMENTS</h3>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Mutual} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Mutual Fund</h2>
            <p >E2E infrastructure for mutual fund investing</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Equity} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Indian Equity</h2>
            <p>Ready-made stock baskets with major broker integrations</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Gold} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Digital Gold</h2>
            <p >Allow your users to buy & sell digital gold</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Star} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Fixed Deposits</h2>
            <p >Book FDs in one-click without opening a bank account</p>
            </div>
            </div>
            
          </div>
          <div className="dropdown-item">
          <h3 style={{color:'#28B570',fontSize:"24px"}}>DATA</h3>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Market} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Market Research</h2>
            <p >Deep-tech stock research & analysis</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"20px",marginTop:"25px"}}>
            <img src={Historical} alt="" />
            <div style={{lineHeight:"10px"}}>
            <h2>Historical Performance</h2>
            <p>Multi timeframe historical data for stocks,<br/><br/> mutual funds & digital gold</p>
            </div>
            </div>
            
          </div>
        </div>
      )}
    </div>

        <p style={{color:"#FFF",fontSize:"30px"}}>About</p>
      </div>
      
      
    </div>
    </div>
  )
}

export default ProductNavbar
