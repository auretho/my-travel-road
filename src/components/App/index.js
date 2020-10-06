import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Welcome from '../Welcome';
// import NewTravel from '../Connected/NewTravel';
import Profile from '../Connected/Profile';
import EditProfil from '../Connected/EditProfil';
import ConsultProfil from '../Connected/ConsultProfil'
import Home from '../Connected/Home';
import './styles.scss';
import Contact from './Footer/Contact';

const App = ({ checkLoginAuth }) => {
  useEffect(() => {
    checkLoginAuth();
  }, []);
  return (
    <div className="app">
      <Header />
      {/* <NewTravel/> */}
      {/*<Welcome /> */}
      <EditProfil />
      {/*<ConsultProfil />*/}

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
      
        <Footer />
      <Route path="/contact-us">
        <Contact />
      </Route>
      
    </div>
  );
};

App.propTypes = {
  checkLoginAuth: PropTypes.func.isRequired,
};

export default App;
