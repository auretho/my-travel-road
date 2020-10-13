import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import pic from './cover.jpg';
import avatarpicture from './face.jpg';
import './styles.scss';

const PublicTravelView = () => {

    return(
        <div className="pubTravView">
            <div className="pubTravView-header">
                <div className="pubTravView-infos">
                    <h2 className="pubTravView-title">Titre</h2>
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




// const { pathToCall } = action.payload;
//       axios({
//         method: 'get',
//         url: `http://ec2-23-20-252-110.compute-1.amazonaws.com/api/fiction/la-montre-du-temps/path/${pathToCall}`,
//         headers: {
//           authorization: `Bearer ${cookies.get('token').token}`,
//         },
//       })