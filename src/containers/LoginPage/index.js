import { connect } from 'react-redux';
import * as loginActions from './actions/login';
import LoginPage from '../../components/LoginPage/LoginPage';
import loginReducer from './reducers/auth'

export {
  loginReducer,
  loginActions,
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(loginActions.startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
