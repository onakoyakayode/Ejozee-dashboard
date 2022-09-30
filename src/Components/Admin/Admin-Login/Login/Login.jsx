import React from 'react';
import './Login.css'
import Logo from '../../../../Images/errand-logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Jwt } from 'jsonwebtoken';


const Login = () => {

    const loginApiCall = async () => {
        const token = jwt.sign(
            {
                email: formData.username,
                password: formData.password
            },
            'secret1258'
        )

        const request = fetch("https://ejozeebackend.herokuapp.com/admin/")
        Method: "POST"
        headers: {"Content-Type: application/json"}
        body: JSON.stringify(token)

        const response = request.json()
    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        checkbox: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox"? checked : value
            }
        }
    )}

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.username === "" || formData.password === "" ) {
            alert('Email and Password is required');
            return
        }
        if (formData.username || formData.password) {
            const data = {
                username: formData.username,
                password: formData.password
            }
            
            axios.post("https://ejozeebackend.herokuapp.com/admin/", data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => {
                console.log(err)
            })
            navigate('/dashboard');
            return;
        } else {
            alert('Login Failed !. Check username and password')
        }

        loginApiCall();

        
    }

    return (
        <div className='login'>
            <div className='logo'>
                <img src={Logo} className='logo-img' alt='logo' /> 
            </div>
            <div className='login-form'>
                <h3 className='add-admin-title'>Ejozee Admin Panel</h3>
                <form onSubmit={handleSubmit} method="POST">
                    <div className='login-email'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' onChange={handleChange} value={formData.email} className='email' placeholder='Email Address' name='username' id='email'/>
                    </div>
                    <div className='login-password'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" onChange={handleChange} value={formData.password} name="password" placeholder='Password' id='password'/>
                    </div>
                    <div className='login-confirm'>
                        <div className='add-admin-remember'>
                            <input type="checkbox" onChange={handleChange} checked={formData.checkbox} name="checkbox" id="checkbox"/>
                            <label htmlFor="checkbox">Remember Me</label>
                        </div>
                        <div className='forgot-password'>
                            <Link to='' className="forgot-password">Forgot Password</Link>
                        </div>
                    </div>
                    <button type='submit' className="btn-login">Login</button>
                    <Link className='add-admin-btn' to='/addAdmin'><h3 className='add-admin-text'>Add Admin</h3></Link>
                </form>
            </div>  

        </div>
    )
}



export default Login;