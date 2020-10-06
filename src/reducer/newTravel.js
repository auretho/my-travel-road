import { TOGGLE_NEWSTEP_BUTTON } from '../actions/newStep-actions';

const initialState = {
    name: 'Mexique',
    continent: 'Amérique latine',
    departure: '20 janvier 2019', 
    opened: false,   
};

const newTravel = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_NEWSTEP_BUTTON:
            return {
                ...state,
                opened: true,
            };
        default:
            return state;
    }
};

export default newTravel;