import { EDIT_USER_CHANGE, EDIT_USER_ERROR, EDIT_USER_SUCCESS, EDIT_USER_SELECT_AVATAR} from '../actions/profile-actions';


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
    selectedAvatarFile: null,
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
            case EDIT_USER_CHANGE:
                return {
                    ...state,
                    ...action.payload,
                };
            case EDIT_USER_ERROR:
                return{
                    ...state,
                    editMessage: "Les changements n'ont pas été enregistrés",
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
                }
            case EDIT_USER_SUCCESS:
                return{
                    ...state,
                    editMessage: "Les changements ont bien été enregistrés",
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
                }
            case EDIT_USER_SELECT_AVATAR:
                return{
                    ...state,
                    selectedAvatarFile: action.payload,
                }
            
        default:
            return state;
    }
};

export default user;