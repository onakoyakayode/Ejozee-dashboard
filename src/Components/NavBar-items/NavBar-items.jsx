import React, { useState} from 'react';
import './NavBar-items.css'
import {Link} from 'react-router-dom'

const NavBarItems = ({item}) => {


    const [open, setOpen] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState(false)

    if (item.children) {
        return (
            <div className={ open ?'navbar-item open' : 'navbar-item' }>
                <div className="navbar-item-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.title}
                    </span>
                    {item.icon && <i className="bi bi-chevron-down toggle-btn"></i>}
                </div>
                <div className="navbar-errand-list">
                    <span onClick={() => setBackgroundColor(!backgroundColor)}>{item.children.map((child, index) => <NavBarItems key={index} item={child}/>)}</span>
                    {item.children.icon && <i className="bi-6-square"></i>}
                </div>
            </div>
        )
    } else {
        return (
            <Link to={item.path || "#"} className="navbar-item">
                
                {item.title}
                {item.icon && <i></i>}
                
            </Link>
        )
    }
}

export default NavBarItems;