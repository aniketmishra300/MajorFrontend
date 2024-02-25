import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import "../App.css"
import Home from '../Component/Home'
import IndiaTourism from '../Component/IndiaTourism'
import TourPackages from '../Component/TourPackages'
import PlaceVisit from '../Component/PlaceVisit'
import TourOffers from '../Component/TourOffers'
import ContactUs from '../Component/ContactUs'
import DynamicPage from '../Component/DynamicPage'
import Login from '../Component/Login'
import Register from '../Component/Register'

export const NavBar = () => {

  const [count, setCount] = useState("")
    const Navigate = useNavigate()

    const handleLogin = ()=>{
        Navigate("/login")
    }

    const Auth = async ()=>{
        const token = localStorage.getItem("token")
           if(!token){
             alert("login First!")
             Navigate('/login')
           }
       }


       const token = localStorage.getItem("token")
  useEffect(() => {
    setCount(token)
    // console.log("token")
  }, [token])

  const handleLogout = () => {
    setCount("")
    localStorage.removeItem("token")
    Navigate('/login')
  }

    return (
        <div>
            <span className='TopNav'>
                <div className='innerLogo'>
                <img className='logo' src='https://www.theindiatourism.com/images/logo.webp' alt='not found' />
                <img className='logo' src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='not found' />
                </div>
                <div>
                    <h3 className='headerEmail'>Email : info@theindiatourism.com</h3>
                    <span>
                        <img src='https://www.theindiatourism.com/images/india.webp' alt='not found' />
                        +91 9549279999
                    </span>
                </div>
            </span>
                {count ? (
            <button className='Login' onClick={handleLogout}>Logout</button>) : (
            <button className='Login' onClick={handleLogin}>Login</button>)
          }


            <div className='NavBar'>
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/'>Home</NavLink>|
                <NavLink onClick={Auth} style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/indiaTourism'>India Tourism</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/TourPack'>Tour Packages</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/PlaceVisit'>Place To Visit</NavLink>|
                <NavLink onClick={Auth} style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/TourOffers'>Tour Offers</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/ContactUs'>Contact US</NavLink>
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/indiaTourism' element={<IndiaTourism />} />
                <Route path='/TourPack' element={<TourPackages />} />
                <Route path='/PlaceVisit' element={<PlaceVisit />} />
                <Route path='/TourOffers' element={<TourOffers />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/Dynamic/:id' element={<DynamicPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>

        </div>
    )
}
