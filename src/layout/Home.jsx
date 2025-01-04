import React from 'react'
import { backgroundimg } from '../assets';
function Home() {

  const styles = {
      backgroundImage: `url(${backgroundimg})`,
      backgroundSize: 'cover', // Ensure the image covers the container
      backgroundRepeat: 'no-repeat', // Prevent tiling
      height: '100vh', // Example height, adjust as needed

    };
  
  return (
    <div style={styles}>
      <div>
      <h1 className='text-center'>Welcome to our Lab</h1>
      <h3 className='text-center'>We are here to provide best labaratory solution for you</h3>
      </div>
    </div>
  )
}

export default Home;
