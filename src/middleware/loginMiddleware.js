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
          const token = localStorage.getItem('token');
        axios({
          headers: { Authorization: `Bearer ${token}`},
          method: 'post',
          url: 'http://127.0.0.1:8000/isLogged',
          //withCredentials: true, // le serveur doit savoir qui je suis pour me répondre
        })
          .then((res) => {
            const { data } = res;
            console.log({data});
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
              url:  'http://127.0.0.1:8000/api/login_check',
              data: {
                  username: store.getState().login.email,
                  password: store.getState().login.password,
              },
              //withCredentials: true,
            })            
            .then((res) => {
              const serverResponse = res.data;
              console.log(serverResponse);

              //* =========== */
              //stockage du token envoyé par symfo lors de la connexion
              localStorage.setItem('token', serverResponse.token);
              //requête axios pour la page home
              axios({
                headers: { Authorization: `Bearer ${serverResponse.token}` },
                method: 'get',
                url:  'http://127.0.0.1:8000/api/home',
                //withCredentials: true,
              })
              .then((res) => {
                const serverResponse = res.data;
                console.log(res.data);
                dispatch(loginSuccess(serverResponse));
              })
              //* =========== */

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
              url: 'http://127.0.0.1:8000/logout',
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
