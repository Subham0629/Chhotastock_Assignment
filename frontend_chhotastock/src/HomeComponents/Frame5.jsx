import React from 'react'
import "../HomeStyle/Frame5.css"
import Value from "../Images/Value.png"
import EV from "../Images/EV.png"
import Gems from "../Images/Gems.png"
import Hidden from "../Images/Hidden.png"
const Frame5 = () => {
  return (
    <div id='frame5container'>
       
        <div style={{width:"80%",margin:"auto",marginBottom:"80px"}}>
        <h2>STOCK INVESTING, SIMPLIFIED</h2>
      <p className='para1'>Online trading and investing in the market <br/>
does not have to be boring. 
<br/><br/>
While we adopt a technology-led approach in <br/>
building our product, we are keeping our users-investors <br/>
and traders even before that</p>

        </div>
      

<div id='valueboxcontainer'>
    <div className='valuebox'>
        <div style={{display:"flex",alignItems:"center",gap:"30px"}}> 
            <div className='imgbox'>
                <img style={{marginTop:"-5px"}} src={Value} alt="Value" />
            </div>
            <p style={{color:"white"}}>Value Deals</p>
        </div>
        <p style={{fontSize:"18px",lineHeight: "24px",color:"#777"}}>For the people who would love to risk 
            huge to get rewarded. People who
             would love to risk huge to get rewarded</p>
             <div style={{display:"flex",gap:"30px"}}>
                <div >
                    <p style={{fontSize:"20px",color:"#777"}}>CAGR</p>
                    <h3 style={{color:"white"}}>17.80%</h3>
                </div>
                <div>
                    <p style={{fontSize:"20px",color:"#777"}}>Min Amount</p>
                    <h3 style={{color:"white"}}>120</h3>
                </div>
             </div>
    </div>

    <div className='valuebox'>
        <div style={{display:"flex",alignItems:"center",gap:"30px"}}> 
            <div className='imgbox'>
                <img src={EV} alt="Value" />
            </div>
            <p style={{color:"white"}}>EV Revolution</p>
        </div>
        <p style={{fontSize:"18px",lineHeight: "24px",color:"#777"}}>For the people who would love to risk
            huge to get rewarded. People who
             would love to risk huge to get rewarded</p>
             <div style={{display:"flex",gap:"30px"}}>
                <div >
                    <p style={{fontSize:"20px",color:"#777"}}>CAGR</p>
                    <h3 style={{color:"white"}}>17.80%</h3>
                </div>
                <div>
                    <p style={{fontSize:"20px",color:"#777"}}>Min Amount</p>
                    <h3 style={{color:"white"}}>120</h3>
                </div>
             </div>
    </div>

    <div className='valuebox'>
        <div style={{display:"flex",alignItems:"center",gap:"30px"}}> 
            <div className='imgbox'>
                <img style={{marginTop:"-2px"}} src={Gems} alt="Value" />
            </div>
            <p style={{color:"white"}}>Hidden Gems</p>
        </div>
        <p style={{fontSize:"18px",lineHeight: "24px",color:"#777"}}>For the people who would love to risk 
            huge to get rewarded. People who
             would love to risk huge to get rewarded</p>
             <div style={{display:"flex",gap:"30px"}}>
                <div >
                    <p style={{fontSize:"20px",color:"#777"}}>CAGR</p>
                    <h3 style={{color:"white"}}>17.80%</h3>
                </div>
                <div>
                    <p style={{fontSize:"20px",color:"#777"}}>Min Amount</p>
                    <h3 style={{color:"white"}}>120</h3>
                </div>
             </div>
    </div>

    <div className='valuebox'>
        <div style={{display:"flex",alignItems:"center",gap:"30px"}}> 
            <div className='imgbox'>
                <img style={{marginTop:"-3px"}} src={Hidden} alt="Value" />
            </div>
            <p style={{color:"white"}}>Hidden Gems</p>
        </div>
        <p style={{fontSize:"18px",lineHeight: "24px",color:"#777"}}>For the people who would love to risk
            huge to get rewarded. People who
             would love to risk huge to get rewarded</p>
             <div style={{display:"flex",gap:"30px"}}>
                <div >
                    <p style={{fontSize:"20px",color:"#777"}}>CAGR</p>
                    <h3 style={{color:"white"}}>17.80%</h3>
                </div>
                <div>
                    <p style={{fontSize:"20px",color:"#777"}}>Min Amount</p>
                    <h3 style={{color:"white"}}>120</h3>
                </div>
             </div>
    </div>
</div>
<hr style={{color:"gray",width:"95%",margin:"auto",marginTop:"60px",marginBottom:"80px"}}/>
    </div>
  )
}

export default Frame5
