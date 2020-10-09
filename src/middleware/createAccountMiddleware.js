import axios from 'axios';
import {  SIGN_UP_INPUT_SUBMIT, signUpSuccess, signUpError} from '../actions/createAccount-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case SIGN_UP_INPUT_SUBMIT:
          axios({
            method: 'post',
            url:  'http://localhost:3001/create-account',
            data: {
              firstname: store.getState().createAccount.firstname,
              lastname: store.getState().createAccount.lastname,
              pseudo: store.getState().createAccount.pseudo,
              email: store.getState().createAccount.email,
              passpass: store.getState().createAccount.password1,
            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(signUpSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(signUpError())
          })
          break;      
        default:
          break;
    } 
  };




  