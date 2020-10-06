import { combineReducers } from 'redux';
import createAccount from './createAccount';
import login from './login';
import newTravel from './newTravel';

export default combineReducers({
    createAccount,
    login,
    newTravel,
});
