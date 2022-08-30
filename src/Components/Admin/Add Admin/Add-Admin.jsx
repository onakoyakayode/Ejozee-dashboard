import React from 'react';
import './Add-Admin.css'
import Logo from '../../../Images/errand-logo.png';



const AddAdmin = () => {
    return (
        <div className='add-admin'>
            <div className='logo'>
                <img src={Logo} className='logo-img' alt='logo' /> 
            </div>
            <div className='add-admin-form'>
                <h3 className='add-admin-title'>Add Admin</h3>
                <form>
                    <div className='add-admin-email'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' className='email' placeholder='Email Address' name='email' id='email'/>
                    </div>
                    <div className='add-admin-password'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" placeholder='Password' id='password'/>
                    </div>
                    <button type="submit" className="btn-admin">Add Admin</button>
                </form>
            </div>  

        </div>
    )
}


export default AddAdmin;
