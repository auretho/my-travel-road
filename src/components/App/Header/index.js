import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../containers/Login';

import logo from '../../App/Header/logo-travel2.png';
import './styles.scss';


const Header = () => (
    <div className="header">


        <div className="header-left">
            <Link to="/welcome">
                <img src={logo} alt="logo My Travel Road" className="header-logo" />
            </Link>
            {/* <p className="header-title">My Travel Road</p> */}
        </div>
        
        <Login />
    </div>
  );

  export default Header;