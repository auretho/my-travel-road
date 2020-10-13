import React from 'react';
import { Link } from 'react-router-dom'; 
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import './style.scss';
import './custom.scss';

const Home = ({data}) =>{ 
    console.log(data);
    return(
    <div className="home">
        <div className="welcome-message">
            <h1>Bienvenue {data.user.nickname}!</h1>
            <Link to="/travel">
                <button className="new-travel">
                    Créer un voyage
                </button>
            </Link>
        </div>

        <Carousel className="item-div ">
        {
            data.travels.map((travel) => (
                <Carousel.Item key={travel.id} className="item">
                    <img
                    className="d-block w-100 h-100 voyage-picture"
                    src={travel.cover}
                    alt="slide"
                    />
                    <Carousel.Caption className="position-sticky">   
                    <h3>{travel.title}</h3>
                    
                    <Link to={`/travel-view/${travel.id}`}>
                        <button className="carousel-button">Visiter</button>
                    </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                )
            )
        } 
        </Carousel>  

    </div>
        
)}

export default Home;

Home.propTypes = {
    firstname: PropTypes.string,
}