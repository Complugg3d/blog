import React from 'react';
import ReactDOM from 'react-dom';
import { history } from './router/AppRouter';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import configureStore from './store';
import { loginActions } from './containers/LoginPage';
import { headerActions } from './containers/Header';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(<App store={store}/>, document.getElementById('root'));
		hasRendered = true;
	}
};

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(loginActions.login(user.uid));
		renderApp();
		if (history.location.pathname === '/') {
			history.push('/dashboard');
		}
	} else {
		store.dispatch(headerActions.logout());
		renderApp();
		history.push('/');
	}
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
