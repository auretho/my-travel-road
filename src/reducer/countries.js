import { FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from '../actions/countries-actions';

const initialState = {
    countryList: [],
    error: null,
};

const countries = (state = initialState, action = {}) => {
switch (action.type) {
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      error: 'Impossible de récupérer le pays souhaité',
    };
    
  case FETCH_COUNTRIES_ERROR:
    return {
      ...state,
      countryList: [...action.payload],
      error: null,
    };
    
  default:
    return state; 
}
}

export default countries;