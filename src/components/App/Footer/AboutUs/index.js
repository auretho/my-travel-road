import React from 'react';
import './styles.scss';
import avatar from '../AboutUs/avatar.jpeg';


const AboutUs = () => {
    return(
        <div className="about">
            <h1>Qui sommes-nous ?</h1>
            
            <div className="about-elements">
                <div className="about-elt1">
                    <h4>Nom</h4>
                    <img className="about-avatar"src={avatar} alt=""/>
                    <p>blalala</p>

                    <h4>Nom</h4>
                    <img className="about-avatar"src={avatar}alt=""/>
                    <p>blalala</p>
                </div>

                <div className="about-elt2">
                    <h4>Nom</h4>
                    <img className="about-avatar"src={avatar} alt=""/>
                    <p>blalala</p>
                    <h4>Nom</h4>
                    <img className="about-avatar"src={avatar}alt=""/>
                    <p>blalala</p>
                </div>
                    
                <div className="about-elt3">
                    <h4>Nom</h4>
                    <img className="about-avatar"src={avatar}alt=""/>
                    <p>blalala</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;