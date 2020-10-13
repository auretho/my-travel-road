import { connect } from 'react-redux';
import Home from '../components/Connected/Home';
import { checkPublicTravel } from '../actions/travel-actions';

const mapState = (state) => ({
    data: state.login.data,
});

const mapDispatch = (dispatch) => ({
    toto: () => {
      dispatch(checkPublicTravel());
    },
});

export default connect(mapState, mapDispatch)(Home);