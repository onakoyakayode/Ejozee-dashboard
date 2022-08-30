import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'
import Logo from '../../Images/errand-logo.png'
import NavBarItems from '../NavBar-items/NavBar-items';
import NavBarData from '../../navbar-data/navbar-data.json'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-img'>
                <img src={Logo} className='navbar-logo' alt='logo'/>
            </div>
            <Link className='overview' to='/overview'>
                <h3 className='navbar-overview'>Overview</h3>
            </Link>
            {
                NavBarData.map((item, index) => <NavBarItems key={index} item={item} />)
            }
        </nav>
    )
}


export default NavBar;