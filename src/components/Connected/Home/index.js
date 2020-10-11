import React from 'react';
import { Link } from 'react-router-dom'; 
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

import afrique from './img/afrique.jpg';
import ameSud from './img/amerique-sud.jpg';
import ameNord from './img/amerique-nord.jpg';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import './custom.scss';

const Home = ({firstname}) => (
    <div className="home">
        <div className="welcome-message">
            <h1>Bienvenue {firstname}!</h1>
            <Link to="/travel">
                <button className="new-travel">
                    Créer un voyage
                </button>
            </Link>
        </div>

        <Carousel className="item-div ">
            <Carousel.Item className="item">
                <img
                className="d-block w-100 h-100 voyage-picture"
                src={ameSud}
                alt="First slide"
                />
                <Carousel.Caption className="position-sticky">
                <h3>Argentine 2017</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                className="d-block w-100 h-100 voyage-picture"
                src={ameNord}
                alt="Third slide"
                />

                <Carousel.Caption className="position-sticky">
                <h3>Amérique du Nord 2018</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                className="d-block w-100 h-100 voyage-picture"
                src={afrique}
                alt="Third slide"
                />

                <Carousel.Caption className="position-sticky">
                <h3>Tanzanie 2009</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>   
    </div>
        
)

export default Home;

Home.propTypes = {
    firstname: PropTypes.string,
}