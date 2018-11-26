import { connect } from 'react-redux';
import Header, { headerActions } from '../../components/Header';

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(headerActions.startLogout())
});

export default connect(null, mapDispatchToProps)(Header);