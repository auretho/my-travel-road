import axios from 'axios';
import {  CHECK_AUTH,
          LOGIN_INPUT_SUBMIT,
          loginSuccess,
          loginError,
          LOGIN_INPUT_LOGOUT,
          logoutSuccess,
          logoutError,
   } from '../actions/login-actions';


   export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){
        case CHECK_AUTH:
        axios({
          method: 'post',
          url: 'http://localhost:3001/isLogged',
          withCredentials: true, // le serveur doit savoir qui je suis pour me répondre
        })
          .then((res) => {
            const { data } = res;
            // Si je suis connecté
            if (data.logged) {
              dispatch(loginSuccess(data));
            }
            // sinon
          })
          .catch((err) => {
            console.error(err);
          });
        break;
        case LOGIN_INPUT_SUBMIT:
            axios({
              method: 'post',
              url:  'http://localhost:3001/login',
              data: {
                  email: store.getState().login.email,
                  password: store.getState().login.password,
              }, 
              withCredentials: true, 
            })            
            .then((res) => {
              const serverResponse = res.data;
              console.log(serverResponse);
              dispatch(loginSuccess(serverResponse));
            })
            .catch((err) => {
              console.log(err);
              dispatch(loginError());
            });
          break;
          case LOGIN_INPUT_LOGOUT:
            axios({
              method: 'post',
              url: 'http://localhost:3001/logout',
              withCredentials: true,
            })
            .then((res) => {
                const { data } =res;
                console.log(data);
                dispatch(logoutSuccess());
            })
            .catch((err) => {
                console.error(err);
                dispatch(logoutError());
            });
            break;
            default:
          break;
    } 
  };
