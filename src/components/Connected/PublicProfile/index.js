import React from 'react';
import PropTypes from 'prop-types';
import cove from './img/voyage.jpg';
import avata from './img/avatar.png';
import afrique from './img/afrique.jpg';
import ameSud from './img/amerique-sud.jpg';
import ameNord from './img/amerique-nord.jpg';

import './style.scss';

const PublicProfile = ({
    pseudo,
    avatar,
    cover,
    description,
    travelCover,
    travelTitle,
    }) => {
    return (
    <div className="profile">
        <div className="profile-photo">
            <img src={cove} alt="fond d'écran" className="profile-cover"/>
        </div>
        <div className="profile-picture">
            <img src={avata} alt="avatar" className="profile-avatar"/>
            <h2 className="profile-pseudo">{pseudo}</h2>
        </div>
        <div className="profile-journal">
            <h2 className='profile-title'>Journal de bord</h2>
            <p>{description}</p>
        </div>

        <div className="past-travels">
            <div className="voyage">
                <img src={afrique} alt="Voyage Afrique"/>
                <h2>{travelTitle}</h2>
            </div>

            <div className="voyage">
                <img src={ameSud} alt="Voyage Amerique du Sud"/>
                <h2>{travelTitle}</h2>
            </div>

            <div className="voyage">
                <img src={ameNord} alt="Voyage Amerique du Nord"/>
                <h2>{travelTitle}</h2>
            </div>
        </div>
    </div>
);
};

PublicProfile.protoTypes = {
    pseudo: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    descritpion: PropTypes.string.isRequired,
    travelCover: PropTypes.string.isRequired,
    travelTitle: PropTypes.string.isRequired,

};

export default PublicProfile;
