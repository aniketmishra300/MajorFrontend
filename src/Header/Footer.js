import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Footer = () => {
  return (
    <div>
         <div className='Footer'>
                <NavLink to='/ContactUs'>Contact US</NavLink>|
                <NavLink to='/'>Site Map</NavLink>|
                <NavLink to='/'>Payment Procedure</NavLink>|
                <NavLink to='/'>Terms & Conditions</NavLink>|
                <NavLink to='/'>Link Exchange</NavLink>|
                <NavLink to='/'>Blog</NavLink>
            </div>

            <div className='FooterContainer'>
                <div className='fontFooter'>
                    <h2>The India Tourism</h2>
                    <h4> 📩: info@theindiatourism.com </h4>
                    {/* <img src='https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png' alt='not found'/> */}
                </div>
                <div className='footerLogo'>
                    <img src='https://www.theindiatourism.com/images/India-tour-footer.jpg' alt='not found'/>
                </div>
                   

            </div>
    </div>
  )
}

export default Footer