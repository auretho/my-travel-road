import { TOGGLE_NEWSTEP_BUTTON, NEWSTEP_INPUT_CHANGE, NEWSTEP_FORM_SUBMIT } from '../actions/newStep-actions';

const initialState = {
    name: 'Mexique',
    continent: 'Amérique latine',
    departure: '20 janvier 2019', 
    opened: false,  
    step: {
        country: '',
        city: 'Nice',
        place: 'place Masséna',
        stepNb: 3,
        departure: '11/06/2018',
        arrival: '21/06/2018',
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
                ...action.payload,
            };
        default:
            return state;
    }
};

export default newTravel;