import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import PostsHome from '../pages/PostsHome';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/posts" component={PostsHome} isPrivate />
  </Switch>
);

export default Routes;
