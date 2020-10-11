import { connect } from 'react-redux';
import EditProfile from '../components/Connected/EditProfile';
import { editUserChange, editUserSubmit, editUserSelectAvatar } from '../actions/profile-actions';


const mapState =(state) => ({
    firstname: state.editProfile.firstname,
    lastname: state.editProfile.lastname,
    pseudo: state.editProfile.pseudo,
    email: state.editProfile.email,
    city: state.editProfile.city,
    cityCode: state.editProfile.cityCode,
    description: state.editProfile.description,
    password1: state.editProfile.password1,
    password2: state.editProfile.password2,
    avatar: state.editProfile.avatar,
    cover: state.editProfile.cover,
    editMessage: state.editProfile.editMessage,
    selectedAvatarFile: state.editProfile.selectedAvatarFile,
    
});

const mapDispatch = (dispatch) => ({
    onInputChange: (text) => {
        dispatch(editUserChange(text));
    },
    onInputSubmit: () => {
        dispatch(editUserSubmit() )

    },
    onInputSelectAvatar: (object) => {
        dispatch(editUserSelectAvatar(object))
    },
});


export default connect(mapState, mapDispatch)(EditProfile);