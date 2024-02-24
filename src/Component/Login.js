import React, { useState } from 'react'
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        const url= "https://majorbackend-mfy9.onrender.com/login" 
        // const url = 'http://localhost:5500/login'
        axios.post(url, { email, password })
            .then((res) => {
                console.log(res.data)

                if (res.data.msg === "User logged in successfully") {
                    alert(res.data.msg, "login success")
                    localStorage.setItem("token", res.data.token)
                    navigate("/")
                }
            })
        // console.log(response.data)
    }

    return (
        <div className='Login_Form'>
            <h1>Login</h1>
                <span className="Email_input">Email Id :
                    <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </span>
            
                <span>Password :
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </span>
         
            <button className='Login_Btn' type='submit' onClick={handleLogin}>Login</button>
            <NavLink to='/register'><h3>New to Ecommerce? Register First</h3></NavLink>
        </div>
    )
}

export default Login