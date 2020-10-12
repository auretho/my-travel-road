import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import pic from './cover.jpg';
// import avatarpicture from './face.jpg';

import './styles.scss';



const privateProfile = ({ userData }) => {
    console.log(userData)
    return (
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
                    </Link>
                    <Link to='/public-profile' >
                        <button className="consult-pseudo button">Ma vue publique</button>
                    </Link>
            </div>
            
            <div className="consult-article">
                <article>
                    <h4>A Propos</h4>
                        <p>
                            {userData.presentation}
                        </p>
                </article>
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
