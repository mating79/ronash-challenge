import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useClientRouting, useRoutePropagation } from '@shopify/app-bridge-react';

import MainLayout from '@/layouts/MainLayout';
import { PATHS } from 'config/constants';

import Home from './pages/Home';
import Help from './pages/Help';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const Router = ({ location, history }) => {
  try {
    useRoutePropagation(location);
  } catch (error) { }

  try {
    useClientRouting(history);
  } catch (error) { }

  return (
    <Switch>
      <MainLayout exact path={PATHS.HOME} component={Home} />
      <MainLayout exact path={PATHS.HELP} component={Help} />

      <Route exact path={PATHS.LOGIN} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Router);
