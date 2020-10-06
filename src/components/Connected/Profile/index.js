import React from 'react';
import cover from './img/voyage.jpg';
import avatar from './img/avatar.png';
import afrique from './img/afrique.jpg';
import ameSud from './img/amerique-sud.jpg';
import ameNord from './img/amerique-nord.jpg';

import './style.scss';

const Profile = () => (
    <div className="profile">
        <div className="profile-photo">
            <img src={cover} alt="fond d'écran" className="profile-cover"/>
        </div>
        <div className="profile-picture">
            <img src={avatar} alt="avatar" className="profile-avatar"/>
            <h2 className="profile-pseudo">@Nomades_Land</h2>
        </div>
        <div className="profile-journal">
            <h2 className='profile-title'>Journal de bord</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis ut delectus eaque corporis, aperiam aliquid nostrum sunt officiis repellendus quo inventore neque animi alias nesciunt incidunt vitae non adipisci optio veritatis ea mollitia quos quibusdam libero. Rem, sapiente? Aut itaque tempora perspiciatis quis laboriosam, commodi in, odio nemo molestias velit unde optio sint eos voluptate! Beatae, consectetur quia delectus ratione amet, quis non officia perspiciatis maxime est cum voluptas quasi nesciunt? Alias error praesentium numquam facilis ut doloremque nobis?</p>
        </div>

        <div className="past-travels">
            <div className="voyage">
                <img src={afrique} alt="Voyage Afrique"/>
                <h2>Kenya 2003</h2>
            </div>

            <div className="voyage">
                <img src={ameSud} alt="Voyage Amerique du Sud"/>
                <h2>Argentine 2015</h2>
            </div>

            <div className="voyage">
                <img src={ameNord} alt="Voyage Amerique du Nord"/>
                <h2>Nevada-Colorado 2017 </h2>
            </div>
        </div>
    </div>
);

export default Profile;
