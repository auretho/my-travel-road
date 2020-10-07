import { TOGGLE_NEWSTEP_BUTTON, NEWSTEP_INPUT_CHANGE, NEWSTEP_FORM_SUBMIT, TRAVEL_INPUT_CHANGE, TRAVEL_FORM_SUBMIT } from '../actions/travel-actions';

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
    step: {
        image: '',
        description: '',
        country: '',
        city: '',
        place: '',
        stepNb: '',
        departure: '',
        arrival: '',
    }, 
};

const newTravel = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_NEWSTEP_BUTTON:
            return {
                ...state,
                opened: true,
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
        case TRAVEL_INPUT_CHANGE:
            return {
                ...state,
                ...action.payload,
            };
        case TRAVEL_FORM_SUBMIT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default newTravel;