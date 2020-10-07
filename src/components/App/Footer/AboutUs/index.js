import React from 'react';
import './styles.scss';
import avatar from '../AboutUs/avatar.jpeg';


const AboutUs = () => {
    return(
        <div className="about">
            <h2>Qui sommes-nous ?</h2>
            
            <div className="about-elements">
                <div className="about-elt1">
                    <h4>Jérôme</h4>
                    <img className="about-avatar"src={avatar} alt=""/>
                    <p>Product Owner</p>
                </div>

                <div className="about-elt2">
                    <div className="about-scrum">
                        <h4>Sarah</h4>
                        <img className="about-avatar"src={avatar} alt=""/>
                        <p>Scrum Master</p>
                    </div>
                    <div className="about-back">
                        <h4>Jérémy</h4>
                        <img className="about-avatar"src={avatar}alt=""/>
                        <p>Lead Dev Back</p>
                    </div>
                </div>
                    
                <div className="about-elt3">
                    <div className="about-front">
                        <h4>Aurélie</h4>
                        <img className="about-avatar"src={avatar}alt=""/>
                        <p>Lead Dev Front</p>
                    </div>
                    <div className="about-master">
                    <h4>Melo</h4>
                    <img className="about-avatar"src={avatar}alt=""/>
                    <p>Git master</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;