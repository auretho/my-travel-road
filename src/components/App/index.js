import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from './Footer';
import Welcome from '../Welcome';
import Contact from './Footer/Contact';
import Connected from '../Connected';
import AboutUs from './Footer/AboutUs'
import './styles.scss';

const App = ({ checkLoginAuth, isLogged } ) => {
  useEffect(() => {
    checkLoginAuth();
} /*,[] */);
return (
    <div className="app">
      <Header />

      {!isLogged && (    
      <Welcome />       
      )}
      
      {isLogged && (
      <Connected />
      )}

        <Footer />
      <Route path="/contact-us">
        <Contact />
      </Route>

      
      <AboutUs />
    </div>
  );
};

App.propTypes = {
  checkLoginAuth: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
