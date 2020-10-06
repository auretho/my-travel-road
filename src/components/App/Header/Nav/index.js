import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; 

import './style.scss';

const Nav = ({ loggedMessage, handleLogout}) => { 
    return (
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
    
    <div className="navigation-logged">
    <p className="navigation-message">
      {loggedMessage}
    </p>
    
    <button
      type="button"
      className="navigation-button"
      onClick={handleLogout}
    >
      Déconnexion
    </button>
    </div>
  </div>
);
};

Nav.propTypes = {
    handleLogout: PropTypes.func.isRequired,
    loggedMessage: PropTypes.string,
};




export default Nav;