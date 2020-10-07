import axios from 'axios';
import { TRAVEL_FORM_SUBMIT, NEWSTEP_FORM_SUBMIT, travelSuccess, travelError, stepSuccess, stepError} from '../actions/travel-actions';
import newTravel from '../reducer/newTravel';


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
        default:
          break;
    } 
  };




  