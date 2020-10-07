import { TOGGLE_NEWSTEP_BUTTON, NEWSTEP_INPUT_CHANGE, NEWSTEP_FORM_SUBMIT } from '../actions/newStep-actions';

const initialState = {
    location: 'Mexique',
    continent: 'Amérique latine',
    departure: '20 janvier 2019', 
    opened: false,  
    step: {
        country: '',
        city: '',
        place: '',
        stepNb: 1,
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
        default:
            return state;
    }
};

export default newTravel;