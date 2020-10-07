import { createStore, compose, applyMiddleware } from 'redux';

import createAccountMiddleware from '../middleware/createAccountMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';
import travelMiddleware from '../middleware/travelMiddleware';

import reducer from '../reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        createAccountMiddleware,
        loginMiddleware,
        travelMiddleware,
    ),
);

const store = createStore(
    reducer, 
    enhancers,
);


export default store;