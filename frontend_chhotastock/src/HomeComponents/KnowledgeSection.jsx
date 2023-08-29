import React from 'react'
import "../HomeStyle/KnowledgeSection.css"
import Knowledgeimage from "../Images/Knowledgeimage.png";
const KnowledgeSection = () => {
  return (
    <div id='KnowledgeContainer'>
        <h1>Knowledge Based <br/>
Investing & Trading</h1>
<p className='knowledgeptag'>Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools</p>
      <img width={"60%"} src={Knowledgeimage} alt='Knowledgeimage'/>
    </div>
  )
}

export default KnowledgeSection
