// import axios from 'axios';
import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Dashboard.css'



const Dashboard = ({children}) => {
    return (
        <div className='dashboard-container'>
            <div className="navbar">
                <NavBar />
            </div>
            <div className='dashboard-children'>{children}</div>
        </div>
    )
}


export default Dashboard;


