import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pic from './cover.jpg';
import avatarpicture from './face.jpg';
import './styles.scss';

const PublicTravelView = () => {
    return(
        <div className="pubTravView">
            <div className="pubTravView-header">
                <div className="pubTravView-infos">
                    <h2 className="pubTravView-title">Titre du voyage</h2>
                    <p className="pubTravView-date">date de départ: 00/00/0000</p>
                </div>

                <div className="pubTravView-photo">
                    <img className="pubTravView-cover" src={pic} alt="" />
                        <div className="pubTravView-picture">
                            <img className="pubTravView-avatar"src={avatarpicture} alt=""/>
                            <p className="pubTravView-name">PSEUDO</p>            
                        </div>
                </div>
                <div className="pubTravView-content">                    
                <select name="steps" id="steps">
                            <option value="">--Choisissez une étape--</option>
                            <option value="step">flagada</option>

                        </select>

                </div>
                
            </div>
            <div className="pubTravView-main">
                <div className="pubTravView-map">
                    lopmlo
                </div>
            </div>
        </div>
    )
};




export default PublicTravelView;