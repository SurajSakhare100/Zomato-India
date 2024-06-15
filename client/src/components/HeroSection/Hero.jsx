import axios from 'axios';
import React from 'react'

function Hero() {
  const handle = async () => {
    try {
      // Create a FormData object
      const formData = new FormData();
      
      // Append the form fields
      formData.append('username', 'akash');
      formData.append('email', 'ak@gmail.com');
      formData.append('address', 'abc');
      formData.append('name', 'kunal');
  
      // +If you have a file to upload, you can append it as well
      // Example: formData.append('restaurant_image', fileInput.files[0]);
  
      const response = await axios.post('api/v1/restaurants/restaurant', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(formData)
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className='h-screen w-full '>
      <h1 className='text-5xl'>Hero</h1>
      <button 
      onClick={handle}
      className='bg-black px-4 py-1 rounded-md text-white'>submit</button>
    </div>
  )
}

export default Hero