import React from 'react'
import Footer from '../Header/Footer'

const ContactUs = () => {
  return (
    <>
   
    <div className='contact'>
      <h1>Contact Us</h1>
      <hr/>
      <p>Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the information about your tour requirements in order to help us to serve you better.
        This information will enable us to route your request to the appropriate person. You should receive a response within 24 hours</p>
      <div>
        <h3>Email : info@theindiatourism.com</h3>
        <span>
          <img src='https://www.theindiatourism.com/images/india.webp' alt='not found' />
          +91 9549279999
        </span>
      </div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlad1QJcWv3YUc4farcg-Z459IumH5CSkj12nuvS8sFA&s' alt='not found'/>
    </div>
    <br/>
    <Footer/>
    </>
  )
}

export default ContactUs