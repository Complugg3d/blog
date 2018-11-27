import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../containers/Dashboard'
import AddPostPage from '../containers/AddPostPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddPostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;