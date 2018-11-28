import AddPostPage from '../../components/AddPostPage';
import { connect } from 'react-redux';
import * as postActions from './actions';
import * as postReducer from './reducer';

export { 
  postActions,
  postReducer,
};

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(postActions.startAddPost(post))
});

export default connect(null, mapDispatchToProps)(AddPostPage);