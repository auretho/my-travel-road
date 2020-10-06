import { connect } from 'react-redux';
import App from '../components/App';
import { checkAuth } from '../actions/login-actions';

const mapState =null;

const mapDispatch = (dispatch) => ({
    checkLoginAuth: () => {
        dispatch(checkAuth());
    },
});

export default connect(mapState, mapDispatch)(App);