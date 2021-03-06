import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './containers/LoginPage';
import { postReducer } from './containers/AddPostPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store
  const store = createStore(
    combineReducers({
      login: loginReducer,
      posts: postReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
