import {  FORM_INPUT_CHANGE,
          FORM_INPUT_SUBMIT,
          CREATION_SUCCESS,
          CREATION_ERROR
        } from '../actions/createAccount-actions';

const initialState = {
        user: {},
        firstname: '',
        lastname: '',
        email: '',
        pseudo:'',
        password1:'',
        password2:'',
        city:'',
        cityCode: '',
        creationMessage: ''   
};

const signup = (state = initialState, action = {}) => {
    switch (action.type) {
        case FORM_INPUT_CHANGE:
            return {
                ...state,           
                ...action.payload,
            }; 
            case FORM_INPUT_SUBMIT:
            return {
                ...state,
            };
       
        case CREATION_SUCCESS:
          return {
            ...state,
            creationMessage: `Le compte ${action.payload.email} a été crée`
          };
          
        case CREATION_ERROR:
          return {
            ...state,
            user: {},
            creationMessage: 'La création du compte à échoué'

          };
          
        default:
          return state; 
    }
}

export default signup;