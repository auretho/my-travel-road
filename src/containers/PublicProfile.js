import { connect } from 'react-redux';
import PublicProfile from '../components/Connected/PublicProfile';

const mapState = (state) => ({
    pseudo: state.user.pseudo,
    description: state.user.description,
    avatar: state.user.avatar,
    cover: state.user.cover,
});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(PublicProfile);