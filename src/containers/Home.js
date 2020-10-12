import { connect } from 'react-redux';
import Home from '../components/Connected/Home';

const mapState = (state) => ({
    firstname: state.createAccount.firstname,
    data: state.login.data,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);