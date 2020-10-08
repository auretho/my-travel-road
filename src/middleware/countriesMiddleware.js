import axios from 'axios';
import { FETCH_COUNTRIES, fetchCountriesSuccess, fetchCountriesError} from '../actions/countries-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case FETCH_COUNTRIES:
          axios({
            method: 'get',
            url:  'https://restcountries.eu/rest/v2/',
          })
          .then((res) => {
            const serverResponse = res.data;
            const datas = serverResponse;
            console.log(datas)
            console.log(store.getState())
            console.log(datas.find((country) => {
              return(
              country.name === store.getState().newTravel.step.countryList
              )} 
            ))
            dispatch(fetchCountriesSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(fetchCountriesError());
          })
          break;      
        default:
          break;
    } 
  };




  