import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import * as headerActions from './actions/logout';

export { 
  headerActions,
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(headerActions.startLogout())
});

export default connect(null, mapDispatchToProps)(Header);