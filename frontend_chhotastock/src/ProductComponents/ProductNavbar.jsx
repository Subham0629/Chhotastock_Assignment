import React from 'react'
import HomeLogo from "../Images/HomeLogo.png";
import RedDot from "../Images/RedDot.png";
const ProductNavbar = () => {
  return (
    <div style={{position:"sticky",top:"0"}}>
      <div style={{background:"#171E27",display:"flex",
      justifyContent:"space-around",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      <div style={{display:"flex",alignItems:"center"}}>
      <img id='Homelogo' src={HomeLogo} alt='HomeLogo'/>
      <button style={{background:"#FDECEC",color:"#F05656",width:"auto"}}>Gateway <img style={{width:"23px",height:"23px",marginLeft:"8px"}}  src={RedDot} alt="" /></button>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
        <select name="" id="" style={{background:"#171E27",color:"#FFF",border:'0px',fontSize:"30px"}}>
            <option value="">Products</option>
            <option value=""></option>
        </select>
        <p style={{color:"#FFF",fontSize:"30px"}}>About</p>
      </div>
      
      
    </div>
    </div>
  )
}

export default ProductNavbar
