import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { api } from './api';
import Router from './Router';
import { theme } from 'config/theme';
import { PATHS } from 'config/constants';
import RouterLink from '@/shared/links/RouterLink';

import '@shopify/polaris/build/esm/styles.css';
import 'assets/sass/app.scss';

const App = () => {
  useEffect(() => {
    api.setAppBridge('', true);

    const shopId = sessionStorage.getItem('loggedInAsUserShopId');
    const isLoginPage = window.location.pathname.includes('/support/login');

    if (!shopId && !isLoginPage)
      window.open(window.location.origin + PATHS.LOGIN, '_self');
  }, []);

  return (
    <BrowserRouter>
      <AppProvider
        i18n={enTranslations}
        theme={theme}
        linkComponent={RouterLink}
      >
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
