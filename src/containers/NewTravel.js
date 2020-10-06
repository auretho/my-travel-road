import { connect } from 'react-redux';
import NewTravel from '../components/Connected/NewTravel';
import { toggleNewStepButton } from '../actions/newStep-actions';

const mapState = (state) => ({
    name: state.newTravel.name,
    continent: state.newTravel.continent,
    departure: state.newTravel.departure,
    opened: state.newTravel.opened,
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
      dispatch(toggleNewStepButton());
    },
});
export default connect(mapState, mapDispatch)(NewTravel);