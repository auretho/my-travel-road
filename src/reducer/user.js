import { LOGIN_SUCCESS, } from '../actions/login-actions';


const initialState = {
    firstname: 'John',
    lastname: 'Deuf',
    pseudo: "DuhR",
    email: 'JohnDeufDurH@Grokif.miam',
    city: 'MyTravelTown',
    cityCode: 69999,
    description: "J'adoooore le jaune d'oeuf, je parcours le monde à la recherche du jaune d'oeuf ultime, suivez moi dans mes aventures mes COCO...ttes  ",
    cover: "",
    avatar: "",
    password1: "",
    password2: "",
    editMessage:"",
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                pseudo: action.payload.pseudo,
                email: action.payload.email,
                city: action.payload.city,
                cityCode: action.payload.cityCode,
                description: action.payload.description,
                cover: action.payload.cover,
                avatar: action.payload.avatar,
                editMessage: action.payload.editMessage,
            };
        
        default:
            return state;
    }
};

export default user;