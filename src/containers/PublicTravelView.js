import { connect } from 'react-redux';
import PublicTravelView from '../components/Connected/PublicTravelView';

const mapState = (state) => ({
    data: state.login.data,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(PublicTravelView);