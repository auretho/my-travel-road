import React from 'react';
import { NavLink } from 'react-router-dom'; 

import './style.scss';

const Nav = () => (
    <div className="navigation">
        <NavLink exact className="navigation-link" to="/home">
            Accueil
        </NavLink>
        <NavLink exact className="navigation-link" to="/profile">
            Profil  
        </NavLink>
        <NavLink exact className="navigation-link" to="/my-travels">
            Mes voyages
        </NavLink>
    </div>
)

export default Nav;