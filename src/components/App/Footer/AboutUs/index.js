import React from 'react';
import './styles.scss';
import aurel from '../AboutUs/aurel.jpg';
import jerem from '../AboutUs/jerem.jpg';
import jerome from '../AboutUs/jerome.png';
import melo from '../AboutUs/melo.jpg';
import sara from '../AboutUs/sara.jpeg';


const AboutUs = () => {
    return(
        <div className="about">
            <h2 className="about-title">Qui sommes-nous ?</h2>
            
            <div className="about-elements">
                <div className="about-elt1">
                    <h4 className="about-name">Jérôme</h4>
                    <img className="about-avatar"src={jerome} alt=""/>
                    <p className="about-fonction">Product Owner</p>
                </div>

                <div className="about-elt2">
                    <div className="about-scrum">
                        <h4 className="about-name">Sarah</h4>
                        <img className="about-avatar"src={sara} alt=""/>
                        <p className="about-fonction">Scrum Master</p>
                    </div>
                    <div className="about-back">
                        <h4 className="about-name">Jérémy</h4>
                        <img className="about-avatar"src={jerem}alt=""/>
                        <p className="about-fonction">Lead Dev Back</p>
                    </div>
                </div>
                    
                <div className="about-elt3">
                    <div className="about-front">
                        <h4 className="about-name">Aurélie</h4>
                        <img className="about-avatar"src={aurel}alt=""/>
                        <p className="about-fonction">Lead Dev Front</p>
                    </div>
                    <div className="about-master">
                    <h4 className="about-name">Melo</h4>
                    <img className="about-avatar"src={melo}alt=""/>
                    <p className="about-fonction">Git master</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;