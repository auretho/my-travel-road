import axios from 'axios';
import { TRAVEL_FORM_SUBMIT, 
         travelSuccess, 
         travelError, 
         NEWSTEP_FORM_SUBMIT, 
         newStepSuccess, 
         newStepError} from '../actions/travel-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case TRAVEL_FORM_SUBMIT:
          axios({
            method: 'post',
            url:  'http://localhost:3001/travel',
            data: {
              location: store.getState().newTravel.location,
              country: store.getState().newTravel.country,
              departure: store.getState().newTravel.departure,
            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(travelSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(travelError());
          })
          break;    

        case NEWSTEP_FORM_SUBMIT:
          axios({
            method: 'post',
            url:  'http://localhost:3001/create-travel',
            data: {
              step: store.getState().newTravel.step,
              // country: store.getState().newTravel.country,
              // departure: store.getState().newTravel.departure,
              // arrival: store.getState().newTravel.arrival,

            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(newStepSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            console.log('ERREUR!!')
            dispatch(newStepError());
          })
          break;  
        default:
          break;
    } 
  };




  