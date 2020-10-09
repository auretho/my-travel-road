import axios from 'axios';
import { EDIT_USER_SUBMIT, editUserSuccess, editUserError } from '../actions/profile-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){
            case EDIT_USER_SUBMIT:
                axios({
                    method: 'post',
                    url: 'http//localhost:3001/edit-profile',
                    data: {
                        firstname: store.getState().user.firstanme,
                        lastname: store.getState().user.lastname,
                        pseudo: store.getState().user.pseudo,
                        email: store.getState().user.email,
                        currentPassword: store.getState().user.currentPassword,
                        newPassword: store.getState().user.password1,
                        city: store.getState().user.city,
                        cityCode: store.getState().user.cityCode,
                        avatar: store.getState().user.avatar,
                        cover: store.getState().user.cover,
                        description: store.getState().user.description                      
                    },
                })
                .then((res) => {
                    const serverResponse = res.data;
                    console.log(serverResponse);
                    dispatch(editUserSuccess(serverResponse));
                  })
                  .catch((err) => {
                    console.log(err);
                    dispatch(editUserError());
                  });
                break;
        default:
          break;
    } 
  };