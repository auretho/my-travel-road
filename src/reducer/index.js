import { combineReducers } from 'redux';
import createAccount from './createAccount';
import login from './login';
import newTravel from './newTravel';
import user from './user';

export default combineReducers({
    createAccount,
    login,
    newTravel,
    user
});
