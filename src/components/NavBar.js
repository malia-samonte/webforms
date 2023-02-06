import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {

    return(
        <div className = 'navbar'>
            <div className='navbar-logo'>
                Admin Account //
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Portal Home</Link></li>
                <li><Link to="/CreateLogin">Create User Login</Link></li>
                <li><Link to="/ManageAccess">Manage Acesss</Link></li>
                <li><Link to="/ManageUsers">Manage Users</Link></li>
                <li><Link to="/CreateRole">Create Roles</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;