import React from 'react';
import './Login.css'
import Logo from '../../../../Images/errand-logo.png';
import { Link } from 'react-router-dom'



const Login = () => {


    return (
        <div className='login'>
            <div className='logo'>
                <img src={Logo} className='logo-img' alt='logo' /> 
            </div>
            <div className='login-form'>
                <h3 className='add-admin-title'>Ejozee Admin Panel</h3>
                <form>
                    <div className='login-email'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' className='email' placeholder='Email Address' name='email' id='email'/>
                    </div>
                    <div className='login-password'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" placeholder='Password' id='password'/>
                    </div>
                    <div className='login-confirm'>
                        <div className='add-admin-remember'>
                            <input type="checkbox" name="checkbox" id="checkbox"/>
                            <label htmlFor="checkbox">Remember Me</label>
                        </div>
                        <div className='forgot-password'>
                            <a href="#" className="forgot-password">Forgot Password</a>
                        </div>
                    </div>
                    <Link className='add-login-btn' to='/dashboard'><button className="btn-login">Login</button></Link>
                    <Link className='add-admin-btn' to='/addAdmin'><h3 className='add-admin-text'>Add Admin</h3></Link>
                </form>
            </div>  

        </div>
    )
}



export default Login;