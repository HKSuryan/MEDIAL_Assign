import React from 'react'
import "../css/Ogshow.css";
const Ogshow = ({ogImageUrl}) => {
  return (
    <div className='imgos'> 
        {ogImageUrl && (
     
          <img  src={ogImageUrl} alt="OG Image" />
      
      )}</div>
  )
}

export default Ogshow;