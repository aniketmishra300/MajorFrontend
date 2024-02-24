import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../Header/Footer'


const Register = () => {

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = () => {
           
        const url= "https://majorbackend-mfy9.onrender.com/register"
        // const url = 'http://localhost:5500/register'
        axios.post(url, {name,email,password})
            .then((res) => {
                console.log(res.data)

                if(res.data.msg === "email is already exist") {
                    // console.log(res.data.msg)
                   alert(res.data.msg, "! Please Login")
                    navigate("/login")
                }else if(res.data.msg === "User registered successfully"){

                    alert(res.data.msg)
                    navigate("/")
                }
            })
        // console.log(response.data)

    }

    return (
        <>
      
        <div className='Login_Form'>
            <h1>Register</h1>
            <span className="Email_input">Full Name :
                <input type='text' placeholder='Enter Email' value={name} onChange={(e) => setName(e.target.value)} />
            </span>
            <span className="Email_input">Email Id :
                <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </span>
            <span>Password :
                <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </span>
            <button className='Login_Btn' type='submit' onClick={handleRegister}>Register</button>
            <NavLink to='/login'><h3>Already signup? Clik here to Login</h3></NavLink>
        </div>
        <Footer/>
        </>
    )
}

export default Register