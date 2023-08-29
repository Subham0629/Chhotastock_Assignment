import React from 'react'
import "../HomeStyle/Frame4.css"
import page1 from "../Images/page1.png"
import page2 from "../Images/page2.png"
import page3 from "../Images/page3.png"
const Frame4 = () => {
  return (
    <div id='frame4outer'>
      <div id='frame4container' style={{width:"78%"}}>
        <h2>Essential Features for the Super<br/>    Trader in You - All in<h2 style={{color:"yellow",display:"inline"}}> One Platform</h2> </h2>
        <p>Save hours of research by using our readymade <br/>
screens to find your next investment      <br/><br/>    30+ ANALYTICAL TOOLS & CHARTING + LIVE <br/>
          TRADES + STOCK PICKS & MUCH MORE</p>
          <div className='frame4btn' style={{display:"flex",justifyContent:"space-between",width:"50%",alignItems:"center"}}>
        <button style={{width:"auto" ,padding:"5px",fontWeight:"bold"}}>Get started now</button>
        <a style={{color:"white",fontSize:"16px"}} href='#'>See all features</a>
        </div>
      </div>
      <div className='graph' style={{marginTop:"80px",width:"40%",marginLeft:"-80px"}}>
        <img  width={"300px"} style={{position:"absolute",marginLeft:"130px"}} src={page1} alt="page1" />
         
        <img  width={"300px"} style={{marginTop:"50px",marginLeft:"80px",position:"absolute"}} src={page2} alt="page2"/>
        <img  width={"300px"} style={{marginTop:"100px",position:"absolute"}} src={page3} alt="page3" />
      </div>
      
    </div>
  )
}

export default Frame4
