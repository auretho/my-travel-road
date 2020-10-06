import { connect } from 'react-redux';
import NewTravel from '../components/Connected/NewTravel';
import { toggleNewStepButton, newStepInputChange, newStepFormSubmit} from '../actions/newStep-actions';

const mapState = (state) => ({
    name: state.newTravel.name,
    continent: state.newTravel.continent,
    departure: state.newTravel.departure,
    opened: state.newTravel.opened,
    step: state.newTravel.step, 
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
      dispatch(toggleNewStepButton());
    },

    handleChange: (value, name) => {
      const object = {
        [name]: value,
      };
      dispatch(newStepInputChange(object));
    },

    handleSubmit: () => {
      dispatch(newStepFormSubmit());
    },
});
export default connect(mapState, mapDispatch)(NewTravel);