import { connect } from 'react-redux';
import { loginActions } from '../../components/LoginPage';
import LoginPage from '../../components/LoginPage';

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(loginActions.startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
