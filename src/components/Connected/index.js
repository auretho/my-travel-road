import React from 'react';
import { Route } from 'react-router-dom';
import PrivateProfile from '../../containers/PrivateProfile';
import EditProfile from '../../containers/EditProfile';
import Home from './Home';
import NewTravel from '../../containers/NewTravel';
import TravelName from '../../containers/TravelName';
import PublicProfile from '../../containers/PublicProfile';
import ConsultTravel from '../Connected/ConsultTravel';
import './styles.scss';




const Connected = () => (
    <div className='connected'>

        <Route path="/private-profile">
            <PrivateProfile />
        </Route>

        <Route path="/edit-profile">
            <EditProfile />
        </Route>

        <Route path="/home">
            <Home />
        </Route>

        <Route path="/create-travel">
            <NewTravel />
        </Route>

        <Route path="/travel">
            <TravelName />
        </Route>

        <Route path="/public-profile">
            <PublicProfile />
        </Route>

        
        <ConsultTravel />
        

    </div>
);

export default Connected;
