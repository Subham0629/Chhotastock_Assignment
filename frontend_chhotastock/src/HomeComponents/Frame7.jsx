import React from 'react'
import "../HomeStyle/Frame7.css";
import Men1 from "../Images/Men1.png"
import Women1 from "../Images/Women1.png"
import Men2 from "../Images/Men2.png"
import Women2 from "../Images/Women2.png"
const Frame7 = () => {
  return (
    <div id='frame7container'>
      <div id='topbox'>
        <div >
            <h2>Reviews From Early <br/> Adopters</h2>
        </div>
        <div className='frame7smallbox'>
            <h3>156k+</h3>
            <p>Registered Users</p>

        </div>
        <div className='frame7smallbox'>
            <h3>$1.5Mn+</h3>
            <p>Worth investing done</p>

        </div>
      </div>
      <div id='bottombox'>
        <div className='smallbox'>
            <img style={{borderRadius:"50%",marginTop:"-60px"}} src={Men1} alt="" />
            <p>Mahesh, Swiggy delivery partner, Bengaluru</p>
            <p>The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes</p>
        </div>
        <div className='smallbox'>
            
            <p>Chhotastock has cool investment ideas, looking forward to see how the green energy basket does</p>
            <p>Sunita, 4th Year B.com
Student. Bihar</p>
            <img style={{borderRadius:"50%",marginBottom:"-100px"}} src={Women1} alt="" /> 
        </div>
        <div className='smallbox'>
            <img style={{borderRadius:"50%",marginTop:"-60px"}} src={Men2} alt="" />
            <p>Ramesh, Software Engineer, Hyderabad</p>
            <p>Today, I opened a Chhotastock account for my parents through my referrals.. Will start investing for them regularly</p>
        </div>
        <div className='smallbox'>
            
            <p>There is a new player in the financial market -@chhotastock entering the ecosystem from scratch. Simple, Easy & educative</p>
            <p>Piyush, 17 yrs experience in equities, Mumbai</p>
            <img style={{borderRadius:"50%",marginBottom:"-100px"}} src={Women2} alt="" /> 
        </div>
        <div className='smallbox'>
            <img style={{borderRadius:"50%",marginTop:"-60px"}} src={Men1} alt="" />
            <p>Mahesh, Swiggy delivery partner, Bengaluru</p>
            <p>The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes</p>
        </div>
      </div>
    </div>
  )
}

export default Frame7
