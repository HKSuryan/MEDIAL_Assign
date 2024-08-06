import React, { useState } from 'react'
import "../css/Divider.css";
import PostPage from './PostPage';
import Ogshow from './Ogshow';
import { Helmet } from 'react-helmet';
const Divider = () => {
  const[imageURL,setImageURL] = useState('');

  return (

    
    <div className='divider'>
      <Helmet>
            <title>Post Creator</title>
            <meta name="OGIMAGE" content={imageURL}/>
      </Helmet>
        <div className='post'>
            <div className='post-head'><h1>Create a Post</h1></div>
            <div className='post-body'><PostPage setImageURL={setImageURL}/></div>
        
        </div>
        <div className='ogimage'>
            <div className='ogimage-head'><h1>Image Preview</h1></div>
            <div className='ogimage-body'><Ogshow ogImageUrl={imageURL}/></div>
          
        </div>
    </div>
  )
}

export default Divider