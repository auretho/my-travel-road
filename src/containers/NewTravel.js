import { connect } from 'react-redux';
import NewTravel from '../components/Connected/NewTravel';

const mapState = (state) => ({
    name: state.newTravel.name,
    continent: state.newTravel.continent,
    departure: state.newTravel.departure,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(NewTravel);