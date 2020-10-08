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
        <div className="consult">
            <div className="consult-cover">
                <img className="consult-content" src={pic} alt="" />
        </div>
            
             <div className="consult-profil">
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
                <Link to='/edit-profile' >
                    <button className="consult-button">Editer le profil</button>
                </Link>
             </div>
            
            <div className="consult-pseudo">
                {/*<button className="consult-public">Profil public</button>*/}
                    <h2 className="consult-name">{pseudo}<span>&#x2661;</span></h2>
                    <img className="consult-avat"src={avatarpicture} alt=""/>
                    <Link to='/my-travels' >
                        <button className="consult-pseudo-button">Mes voyages</button>
                    </Link>
                    <Link to='/public-profile' >
                        <button className="consult-pseudo-button">Ma vue publique</button>
                    </Link>
            </div>
            
            <div className="consult-article">
                <article>
                    <h4>A Propos</h4>
                        <p>
                            {description}
                        </p>
                </article>
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
