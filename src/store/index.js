import { createStore, compose, applyMiddleware } from 'redux';

import createAccountMiddleware from '../middleware/createAccountMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';

import reducer from '../reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        createAccountMiddleware,
        loginMiddleware,
    ),
);

const store = createStore(
    reducer, 
    enhancers,
);


export default store;