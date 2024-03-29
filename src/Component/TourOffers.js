import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import axios from "axios"
import "../App.css"
import Footer from '../Header/Footer'
import { useNavigate } from 'react-router-dom'

const TourOffers = () => {
  const [data,setData] = useState([])
  const Navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      const fetchData = async () => {
          try {
            const url= "https://majorbackend-mfy9.onrender.com/findAllData"
            // const url ="http://localhost:5500/findAllData"
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
  },[Navigate])

return (
  <div>
      <Slider/>
      {data.filter(item => item.category === "Tour Offers").map((item)=>{
                  return(
                      <div className='TextArea'>
                          <p>{item.maintext}</p>
                      </div>
                  )
              })}

          <div className='MainContainer'>
              {data.filter(item => item.category === "Tour Offers").map((item)=>{
                  return(
                      <div className='innerContainer'>
                          <img src={item.image} alt='not found'/>
                          <h4>{item.place}</h4>
                      </div>
                  )
              })}
          </div>
              <Footer/>
  </div>
)
}

export default TourOffers