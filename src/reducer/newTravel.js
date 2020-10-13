import { TRAVEL_INPUT_CHANGE, 
         TRAVEL_FORM_SUBMIT, 
         TRAVEL_SUCCESS, 
         TRAVEL_ERROR,
         TOGGLE_NEWSTEP_BUTTON, 
         NEWSTEP_INPUT_CHANGE, 
         NEWSTEP_FORM_SUBMIT, 
         NEWSTEP_SUCCESS,
         NEWSTEP_ERROR 
     } from '../actions/travel-actions';
import {FETCH_TRAVELS_SUCCESS, FETCH_TRAVELS_ERROR} from '../actions/privateTravelList-actions';
         

const initialState = {
    id: '',
    location: '',
    coverPic: '',
    description: '',
    country: '',
    city: '',
    departure: '', 
    arrival: '',
    opened: false,  
    redirection: false,
    step: 
        {
        image: '',
        description: '',
        country: '',
        city: '',
        place: '',
        // stepNb: ,
        departure: '',
        arrival: '',
        },
    newStep: [],
    allTravels: [],
};

const newTravel = (state = initialState, action = {}) => {
    switch (action.type) {
        //===================TRAVEL ACTIONS ===================
        case TRAVEL_INPUT_CHANGE:
            return {
                ...state,
                ...action.payload,
            };
        case TRAVEL_FORM_SUBMIT:
            return {
                ...state,
            };
        case TRAVEL_SUCCESS:
            return {
                ...state,
                redirection: true,
            };
        case TRAVEL_ERROR:
            return {
                ...state,
                redirection: true,
            };
        //===================NEWSTEP ACTIONS ===================
        case TOGGLE_NEWSTEP_BUTTON:
            return {
                ...state,
                opened: true,
                redirection: false,
            };
        case NEWSTEP_INPUT_CHANGE:
            return {
                ...state,
                step:{
                    ...state.step,
                    ...action.payload,
                }
            };
        case NEWSTEP_FORM_SUBMIT:
            return {
                ...state,
            };
        case NEWSTEP_SUCCESS:
            return {
                ...state,
                opened: false,
                redirection: true,
                newStep: [...action.payload],
                step:{country: '', departure: '', arrival: ''},
            };
        case NEWSTEP_ERROR:
            return {
                ...state,
                opened: false,
                redirection: true,
                step:{country: '', departure: '', arrival: ''},
            };
        case FETCH_TRAVELS_SUCCESS:
            return {
                ...state,
                allTravels: {...action.payload},
              };
        case FETCH_TRAVELS_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default newTravel;