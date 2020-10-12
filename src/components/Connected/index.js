import React from 'react';
import { Route } from 'react-router-dom';
import PrivateProfile from '../../containers/PrivateProfile';
import EditProfile from '../../containers/EditProfile';
import Home from '../../containers/Home';
import NewTravel from '../../containers/NewTravel';
import TravelName from '../../containers/TravelName';
import PublicProfile from '../../containers/PublicProfile';
import DeleteAccount from '../Connected/DeleteAccount';
import PrivateTravelList from '../../containers/PrivateTravelList';
import './styles.scss';




const Connected = () => (
    <div className='connected'>

        <Route path="/private-profile">
            <PrivateProfile />
        </Route>
        
        <Route path="/delete-account">
            <DeleteAccount />
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

        <Route path="/my-travels" >
        <PrivateTravelList />
        </Route>
        

    </div>
);

export default Connected;
