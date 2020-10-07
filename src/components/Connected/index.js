import React from 'react';
import { Route } from 'react-router-dom';
import ConsultProfil from './ConsultProfil';
import EditProfil from './EditProfil';
import Home from './Home';
import NewTravel from '../../containers/NewTravel';
import Profile from './Profile';
import './styles.scss';




const Connected = () => (
    <div className='connected'>

        <Route path="/profile">
            <ConsultProfil />
        </Route>

        <Route path="/edit-profile">
            <EditProfil />
        </Route>

        <Route path="/home">
            <Home />
        </Route>

        <Route path="/create-travel">
            <NewTravel />
        </Route>

        <Route path="/public-profil">
            <Profile />
        </Route>

    </div>
);

export default Connected;
