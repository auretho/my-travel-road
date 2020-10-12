import { connect } from 'react-redux';
import PrivateTravelList from '../components/Connected/PrivateTravelList';

const mapState = (state) => ({
    datas: state.login.data,
});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(PrivateTravelList);