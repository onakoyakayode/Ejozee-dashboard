import React from 'react';
import './Login.css'
import Logo from '../../../../Images/errand-logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';



const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
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
        if (formData.email === "" || formData.password === "" ) {
            alert('Email and Password is required');
            return
        }
        if (formData.email || formData.password) {
            navigate('/dashboard');
            return;
        } else {
            alert('Login Failed !. Check username and password')
        }

        console.log(formData.email, formData.password)
    }

    return (
        <div className='login'>
            <div className='logo'>
                <img src={Logo} className='logo-img' alt='logo' /> 
            </div>
            <div className='login-form'>
                <h3 className='add-admin-title'>Ejozee Admin Panel</h3>
                <form onSubmit={handleSubmit} action='https://ejozeebackend.herokuapp.com/admin/' method='GET'>
                    <div className='login-email'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' onChange={handleChange} value={formData.email} className='email' placeholder='Email Address' name='email' id='email'/>
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