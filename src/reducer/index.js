import { combineReducers } from 'redux';
import createAccount from './createAccount';
import login from './login';
import newTravel from './newTravel';
import countries from './countries';

export default combineReducers({
    createAccount,
    login,
    newTravel,
    countries,
});
