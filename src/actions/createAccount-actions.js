export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';
export const FORM_INPUT_SUBMIT = 'FORM_INPUT_SUBMIT';
export const CREATION_SUCCESS = 'CREATION_SUCCESS';
export const CREATION_ERROR = 'CREATION_ERROR';


// action pour chaque changement dans un input
export const formInputChange = (payload) => ({
    type: FORM_INPUT_CHANGE,
    payload,
  });
  
  // action pour la soumission des inputs
  export const formInputSubmit = () => ({
    type: FORM_INPUT_SUBMIT,
  });
  
  export const creationSuccess = (payload) => ({
    type: CREATION_SUCCESS,
    payload,
  });
  
  export const creationError = () => ({
    type: CREATION_ERROR,
  });