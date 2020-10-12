import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pic from './cover.jpg';
import avatarpicture from './face.jpg';

import './styles.scss';



const privateProfile = ({
    firstname,
    lastname,
    pseudo,
    email,
    city,
    cityCode,
    avatar,
    cover,
    description,
}) => {
    return (
        <div className="privateProfile">
            
            <div className="privateProfile-infos">
                
                <div className="privateProfile-profil">
                    <h6><b>Nom</b></h6>
                    <p>{lastname}</p>
                    
                    <h6><b>Prénom</b></h6>
                    <p>{firstname}</p>
                    
                    <h6><b>Email</b></h6>
                    <p>{email}</p>
                    
                    <h6><b>Ville</b></h6>
                    <p>{city}</p>
                    
                    <h6><b>Code Postal</b></h6>
                    <p>{cityCode}</p>
                </div>

                <div className="privateProfile-article">
                    <article>
                        <h4 className="privateProfile-titleDescription">A Propos de vous</h4>
                            <p className="privateProfile-description">
                                {description}
                            </p>
                    </article>
                </div>

                <div className="privateProfile-buttons">
                    <Link to='/edit-profile' >
                        <button className="privateProfile-button">Editer le profil</button>
                    </Link>
                    <Link to='/public-profile' >
                        <button className="privateProfile-button">Ma vue publique</button>
                    </Link>                
                    <Link to='/delete-account' >
                        <button className="privateProfile-delete">Supprimer mon compte</button>
                    </Link>
                </div>

            </div>

            <div className="privateProfile-images">

                <div className="privateProfile-photo">
                    <img className="privateProfile-cover" src={pic} alt="" />
                </div>

                <div className="privateProfile-picture">
                    <img className="privateProfile-avatar"src={avatarpicture} alt=""/>

                    <p className="privateProfile-name">{pseudo}</p>            
                </div>

                
            </div>
        </div>




    );
}
export default privateProfile;

privateProfile.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    cityCode: PropTypes.number.isRequired,
    avatar:PropTypes.string.isRequired,
    cover:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
};
