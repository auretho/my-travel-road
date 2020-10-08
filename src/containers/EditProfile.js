import { connect } from 'react-redux';
import EditProfile from '../components/Connected/EditProfile';
import { editUserChange, editUserSubmit } from '../actions/profile-actions';


const mapState =(state) => ({
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    pseudo: state.user.pseudo,
    email: state.user.email,
    city: state.user.city,
    cityCode: state.user.cityCode,
    description: state.user.description,
    password1: state.user.password1,
    password2: state.user.password2,
    avatar: state.user.avatar,
    cover: state.user.cover,
    editMessage: state.user.editMessage,
    
});

const mapDispatch = (dispatch) => ({
    onInputChange: (text) => {
        dispatch(editUserChange(text));
    },
    onInputSubmit: () => {
        dispatch(editUserSubmit() )

    },
});


export default connect(mapState, mapDispatch)(EditProfile);