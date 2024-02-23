import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom"
import "../App.css"
import Home from '../Component/Home'
import IndiaTourism from '../Component/IndiaTourism'
import TourPackages from '../Component/TourPackages'
import PlaceVisit from '../Component/PlaceVisit'
import TourOffers from '../Component/TourOffers'
import ContactUs from '../Component/ContactUs'

export const NavBar = () => {
    return (
        <div>
            <span className='TopNav'>
                <img src='https://www.theindiatourism.com/images/logo.webp' alt='not found' />
                <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='not found' />
                <div>
                    <h3>Email : info@theindiatourism.com</h3>
                    <span>
                        <img src='https://www.theindiatourism.com/images/india.webp' alt='not found' />
                        +91 9549279999
                    </span>
                </div>
                <button>Login</button>
            </span>


            <div className='NavBar'>
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/'>Home</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/indiaTourism'>India Tourism</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/TourPack'>Tour Packages</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/PlaceVisit'>Place To Visit</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/TourOffers'>Tour Offers</NavLink>|
                <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to='/ContactUs'>Contact US</NavLink>
            </div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/indiaTourism' element={<IndiaTourism />} />
                    <Route path='/TourPack' element={<TourPackages />} />
                    <Route path='/PlaceVisit' element={<PlaceVisit />} />
                    <Route path='/TourOffers' element={<TourOffers />} />
                    <Route path='/ContactUs' element={<ContactUs />} />
                </Routes>







        </div>
    )
}
