import React from 'react';
import './Add-Admin.css'
import Logo from '../../../Images/errand-logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';



const AddAdmin = () => {
    
    const navigate = useNavigate()

    const [addAdminData, setAddAdminData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAddAdminData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (addAdminData.email === "" || addAdminData.password === "") {
            alert("Email and Password must be provided")
            return
        }
        if (addAdminData.email || addAdminData.password ) {
            navigate('/')
            return
        }
        else {
            alert("Login Failed! Check Username and Password")
        }
    }




    return (
        <div className='add-admin'>
            <div className='logo'>
                <Link to ='/'><img src={Logo} className='logo-img' alt='logo' /> </Link>
            </div>
            <div className='add-admin-form'>
                <h3 className='add-admin-title'>Add Admin</h3>
                <form onSubmit={handleSubmit} action=' https://ejozeebackend.herokuapp.com/admin/' method='GET'>
                    <div className='add-admin-email'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' onChange={handleChange} value={addAdminData.email} className='email' placeholder='Email Address' name='email' id='email'/>
                    </div>
                    <div className='add-admin-password'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" onChange={handleChange} value={addAdminData.password} name="password" placeholder='Password' id='password'/>
                    </div>
                    <button type="submit" className="btn-admin">Add Admin</button>
                </form>
            </div>  

        </div>
    )
}


export default AddAdmin;
