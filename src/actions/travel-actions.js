export const TOGGLE_NEWSTEP_BUTTON = 'TOGGLE_NEWSTEP_BUTTON';
export const NEWSTEP_INPUT_CHANGE = 'NEWSTEP_INPUT_CHANGE';
export const NEWSTEP_FORM_SUBMIT = 'NEWSTEP_FORM_SUBMIT';
export const TRAVEL_INPUT_CHANGE = 'TRAVEL_INPUT_CHANGE';
export const TRAVEL_FORM_SUBMIT = 'TRAVEL_FORM_SUBMIT';
export const TRAVEL_SUCCESS = 'TRAVEL_SUCCESS';
export const TRAVEL_ERROR = 'TRAVEL_ERROR';
export const STEP_SUCCESS = 'STEP_SUCCESS';
export const STEP_ERROR = 'STEP_ERROR';


export const toggleNewStepButton = () => ({
    type: TOGGLE_NEWSTEP_BUTTON,
  });

export const newStepInputChange = (payload) => ({
  type: NEWSTEP_INPUT_CHANGE,
  payload,
});

export const newStepFormSubmit = () => ({
  type: NEWSTEP_FORM_SUBMIT,
});

export const travelInputChange = (payload) => ({
  type: TRAVEL_INPUT_CHANGE,
  payload,
});

export const travelFormSubmit = () => ({
  type: TRAVEL_FORM_SUBMIT,
});

export const travelSuccess = (payload) => ({
  type: TRAVEL_SUCCESS,
  payload
});

export const travelError = () => ({
  type: TRAVEL_ERROR,  
});

export const stepSuccess = (payload) => ({
  type: STEP_SUCCESS,
  payload
});

export const stepError = () => ({
  type: STEP_ERROR,  
});