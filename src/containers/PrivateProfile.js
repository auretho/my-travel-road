import { connect } from 'react-redux';
import PrivateProfile from '../components/Connected/PrivateProfile';

const mapState = (state) => ({
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    pseudo: state.user.pseudo,
    email: state.user.email,
    city: state.user.city,
    cityCode: state.user.cityCode,
    description: state.user.description,
    avatar: state.user.avatar,
    cover: state.user.cover,
});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(PrivateProfile);