import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import pic from './cover.jpg';
// import avatarpicture from './face.jpg';

import './styles.scss';



const privateProfile = ({ userData }) => {
    console.log(userData)
    return (
<<<<<<< HEAD
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
=======
        <div className="consult">
            <div className="consult-cover">
                <img className="consult-content" src={userData.cover} alt="" />
        </div>
            
             <div className="consult-profil">
                <h6><b>Nom</b></h6>
                <p>{userData.lastname}</p>
                
                <h6><b>Prénom</b></h6>
                <p>{userData.firstname}</p>
                
                <h6><b>Email</b></h6>
                <p>{userData.email}</p>
                
                <h6><b>Ville</b></h6>
                <p>{userData.city}</p>
                
                <h6><b>Code Postal</b></h6>
                <p>{userData.postal}</p>
                <Link to='/edit-profile' >
                    <button className="consult-button">Editer le profil</button>
                </Link>
             </div>
            
            <div className="consult-pseudo">
                {/*<button className="consult-public">Profil public</button>*/}
                    <h2 className="consult-name">{userData.nickname}<span>&#x2661;</span></h2>
                    <img className="consult-avat"src={userData.avatar} alt=""/>
                    <Link to='/my-travels' >
                        <button className="consult-pseudo button">Mes voyages</button>
>>>>>>> 9e3190f080fa7f331a05527696d0b7f7c5f43bf5
                    </Link>
                    <Link to='/public-profile' >
                        <button className="privateProfile-button">Ma vue publique</button>
                    </Link>                
                    <Link to='/delete-account' >
                        <button className="privateProfile-delete">Supprimer mon compte</button>
                    </Link>
                </div>

            </div>
<<<<<<< HEAD

            <div className="privateProfile-images">

                <div className="privateProfile-photo">
                    <img className="privateProfile-cover" src={pic} alt="" />
                </div>

                <div className="privateProfile-picture">
                    <img className="privateProfile-avatar"src={avatarpicture} alt=""/>

                    <p className="privateProfile-name">{pseudo}</p>            
                </div>

                
=======
            
            <div className="consult-article">
                <article>
                    <h4>A Propos</h4>
                        <p>
                            {userData.presentation}
                        </p>
                </article>
>>>>>>> 9e3190f080fa7f331a05527696d0b7f7c5f43bf5
            </div>
        </div>

    );
}
export default privateProfile;

privateProfile.propTypes = {
    userData: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname:PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        city:PropTypes.string,
        postal: PropTypes.number,
        avatar:PropTypes.string.isRequired,
        cover:PropTypes.string.isRequired,
        presentation:PropTypes.string.isRequired,
    }).isRequired,
};
