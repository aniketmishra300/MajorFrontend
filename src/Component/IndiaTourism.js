import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Footer from '../Header/Footer'
import { NavLink, useNavigate } from 'react-router-dom'

const IndiaTourism = () => {
    const [data, setData] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            const fetchData = async () => {
                try {
                    const url= "https://majorbackend-mfy9.onrender.com/findAllData"
                    // const url = "http://localhost:5500/findAllData"
                    const response = await axios.get(url);
                    setData(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchData()
        }
        else{
            // alert("login First!")
            Navigate("/login")
        }
    })

    return (
        <div>
            <Slider />
            {data.filter(item => item.category === "India Tourism").map((item) => {
                return (
                    <div className='TextArea'>
                        <p>{item.maintext}</p>
                    </div>
                )
            })}

            <div className='MainContainer'>
                {data.filter(item => item.category === "India Tourism").map((item) => {
                    return (
                        <div className='innerContainer'>
                            <NavLink to={`/Dynamic/${item.id}`}>
                                <img src={item.image} alt='not found' />
                                <h4>{item.place}</h4>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default IndiaTourism