import React from 'react';
import { Route } from 'react-router-dom';
import { Frame } from '@shopify/polaris';

import TopNav from '@/layouts/TopNav';

const MainLayout = ({ component: Component, ...restProps }) => {
  return (
    <Frame>
      <TopNav />

      <Route
        children={routeProps => <Component {...routeProps} />}
        {...restProps}
      />
    </Frame>
  );
};

export default MainLayout;
