import React from 'react'
import "../HomeStyle/Frame3.css"
import bike from "../Images/bike.png";
import laptop from "../Images/laptop.png";
import Iphone from "../Images/Iphone.png";

const Frame3 = () => {
  return (
    <div id='frame3container'>
      <div id='frame3left'>
        <p className='feature'>Features</p>
        <h5>SAVE NOW. BUY LATER. SIMPLE & REALISTIC</h5>
        <p className='para'>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</p>
        <div style={{display:"flex",justifyContent:"space-between",width:"80%",alignItems:"center"}}>
        <button style={{width:"auto",padding:"15px"}}>Get the App</button>
        <a style={{fontSize:"25px"}} href='#'>Learn More</a>
        </div>
        
      </div>
      
      <div id='frame3right'>
        <div>
            <div id='frame3first' >
                <div className='firstbox'>
                <div >
                <img src={bike} alt="bike" />
                </div>
                <div>
                    <p style={{color:"#9C9C9C",fontSize:"14px"}}>Bounce Infinity EV</p>
                    <p style={{color:"#FFF"}}>Save up for your next Bike</p>
                </div>
                </div>
                
                <div className='secondbox' style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <p style={{color:"#04BF8D"}}>10% returns</p>
                    <div style={{background:'#04BF8D',paddingTop:"10px",
                marginTop:"-10px",borderRadius:"0px 0px 5px 5px",marginRight:"10px",marginLeft:"10px",padding:"5px"}}>Flat ₹400 off</div>
                </div>

            </div>
            <div id='frame3second' >
            <div className='firstbox' style={{width:"422px", marginTop:"20px"}}>
                <div >
                <img style={{marginLeft:"-25px"}} src={laptop} alt="laptop" />
                </div>
                <div>
                    <p style={{color:"#9C9C9C",fontSize:"14px"}}>Lenovo</p>
                    <p style={{color:"#FFF"}}>Save up for your next Laptop</p>
                </div>
                </div>
                
                <div className='secondbox' style={{display:"flex",justifyContent:"end",alignItems:"center",width:"422px"}}>
                    <p style={{color:"#04BF8D"}}>10% returns</p>
                    <div style={{background:'#04BF8D',paddingTop:"10px",
                marginTop:"-10px",borderRadius:"0px 0px 5px 5px",marginRight:"10px",marginLeft:"10px",padding:"5px"}}>Flat ₹400 off</div>
                </div>
            </div>
            <div id='frame3third'>
            <div className='firstbox' style={{marginTop:"20px"}}>
                <div >
                <img style={{marginLeft:"20px",marginRight:"20px"}} src={Iphone} alt="Iphone" />
                </div>
                <div>
                    <p style={{color:"#9C9C9C",fontSize:"14px"}}>Apple</p>
                    <p style={{color:"#FFF"}}>Save up for your next Iphone</p>
                </div>
                </div>
                
                <div className='secondbox' style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <p style={{color:"#04BF8D"}}>10% returns</p>
                    <div style={{background:'#04BF8D',paddingTop:"10px",
                marginTop:"-10px",borderRadius:"0px 0px 5px 5px",marginRight:"10px",marginLeft:"10px",padding:"5px"}}>Flat ₹400 off</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frame3
