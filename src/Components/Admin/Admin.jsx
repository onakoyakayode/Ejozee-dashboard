import React from 'react';
import './Admin.css';
import AddAdmin from './Add Admin/Add-Admin';
import Login from './Admin-Login/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const Admin = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/addAdmin' element={<AddAdmin />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Admin;