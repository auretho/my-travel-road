export const TOGGLE_NEWSTEP_BUTTON = 'TOGGLE_NEWSTEP_BUTTON';
export const NEWSTEP_INPUT_CHANGE = 'NEWSTEP_INPUT_CHANGE';
export const NEWSTEP_FORM_SUBMIT = 'NEWSTEP_FORM_SUBMIT';


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