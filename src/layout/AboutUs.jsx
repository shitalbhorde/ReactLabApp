import React from 'react'
// import {about,about1} from '../assets/index'
function AboutUs(){

  //  const styles = {
  //       backgroundImage: `url(${about})`,
  //       backgroundSize: 'cover', // Ensure the image covers the container
  //       backgroundRepeat: 'no-repeat', // Prevent tiling
  //       height: '100vh', // Example height, adjust as needed
  
  //     }; 
  return (
    <>
    <div>
      <div className='' style={{position:'absolute',height:"90vh"}}>

         {/* <div><h1>About Us</h1></div> */}

      <img src="./about.png" alt="" className='' style={{width:'700px',height:'80vh'}}/>

      <img src="./about2.png" alt="" className='' style={{width:'540px',height:'80vh',position:'absolute',top:'0px'}}/>
      {/* <img src="./about1.png" alt="" style={{right:'-200px', top:'200px'}}/> */}
      </div>
    </div>
    </>
  )
}

export default AboutUs;
