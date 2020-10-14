import { connect } from 'react-redux';
import PublicTravelView from '../components/Connected/PublicTravelView';
import {fetchTravelData} from '../actions/travel-actions';

const mapState = (state) => ({
    travelData: state.newTravel.travelData,
});

const mapDispatch = (dispatch) => ({
    fetchTravelData: () => {
        dispatch(fetchTravelData());
      },
});

export default connect(mapState, mapDispatch)(PublicTravelView);