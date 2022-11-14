import React from 'react'


export default function HI() {
  return (
    <> 
    <div className='hero'  data-aos="zoom-in" data-aos-duration="1500">
        <video className="video" loop muted autoPlay poster=''>
            <source src={require('../assets/video.mp4')}  type="video/mp4"></source>
        </video>
      
       
            <h1 className='content'><u>Travel Safari {"\n"}</u>Welcome to Travel Safari! Travel without bothering about anything : )
            
            </h1>
       
    </div>
    
     </>
      )
}