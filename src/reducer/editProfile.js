import { EDIT_USER_CHANGE } from '../actions/profile-actions';


const initialState = {
    firstname: '',
    lastname: '',
    pseudo: "",
    email: '',
    city: '',
    cityCode: '',
    description: "",
    cover: "",
    avatar: "",
    currentPassword: "",
    password1: "",
    password2: "",
    editMessage:"",
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
            case EDIT_USER_CHANGE:
                return {
                    ...state,
                    ...action.payload,
                };
            
        default:
            return state;
    }
};

export default user;