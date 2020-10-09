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
                        firstname: store.getState().editProfile.firstanme,
                        lastname: store.getState().editProfile.lastname,
                        pseudo: store.getState().editProfile.pseudo,
                        email: store.getState().editProfile.email,
                        currentPassword: store.getState().editProfile.currentPassword,
                        newPassword: store.getState().editProfile.password1,
                        city: store.getState().editProfile.city,
                        cityCode: store.getState().editProfile.cityCode,
                        avatar: store.getState().editProfile.avatar,
                        cover: store.getState().editProfile.cover,
                        description: store.getState().editProfile.description                      
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