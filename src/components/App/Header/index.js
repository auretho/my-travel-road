import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../../containers/Login';
import Nav from '../../../containers/Nav';
import logo from './logo-travel2.png';
import './styles.scss';


const Header = ( { isLogged } ) => {
    return (
    <div className="header">

        <div className="header-left">
            <Link to="/">
                <img src={logo} alt="logo My Travel Road" className="header-logo" />
            </Link>
            {/* <p className="header-title">My Travel Road</p> */}
        </div>

        <div className="header-right">
            {isLogged && (
                <Nav />
            )}
            {!isLogged && (
                <Login />
            )}
        </div>
    </div>
  );
};

  Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
  };

  export default Header;