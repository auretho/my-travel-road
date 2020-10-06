import { connect } from 'react-redux';
import Login from '../components/Welcome/Login';
import { toggleLogginForm,  loginInputChange, loginInputSubmit, loginInputLogout } from '../actions/login-actions';

// récupère l'état du Login 
const mapState = (state) => ({
    opened: state.login.opened,
    email: state.login.email,
    password: state.login.password,
    isLogged: state.login.isLogged ,
    loggedMessage: state.login.loggedMessage,
    loading: state.login.loading,
    pseudo: state.login.pseudo
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
      dispatch(toggleLogginForm());
    },
    changeField: (value, name) => {
      const object = {
        [name]: value,
      };
      dispatch(loginInputChange(object));
    },
    handleLogin: () => {
        dispatch(loginInputSubmit());
    },
    handleLogout: () => {
        dispatch(loginInputLogout());
    }
});
    

export default connect(mapState, mapDispatch)(Login);


