import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Form, FormLayout, Frame, Modal, TextField } from '@shopify/polaris';
import axios from 'axios';
import qs from 'querystring';

import { api } from 'api';
import { PATHS } from 'config/constants';
import { baseUrl } from 'config/baseUrl';
import ToastMessage from '@/shared/global/ToastMessage';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = qs.parse(location.search.replace('?', ''));
  const message = queryParams?.message;

  const [fields, setFields] = useState({
    username: 'subify-admin',
    password: 'subify-password',
    shop: 'somerandomreunion4.myshopify.com',
  });
  const [toast, setToast] = useState({ open: false, msg: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message === 'INVALID_TOKEN') {
      setToast({ open: true, msg: 'INVALID TOKEN. PLEASE LOGIN AGAIN.' });
    }
  }, [message]);

  const handleUpdateFields = useCallback((value, key) => {
    setFields(fields => {
      return { ...fields, [key]: value };
    });
  }, []);

  const closeToast = () => setToast({ open: false, msg: '' });

  const toastMarkup = toast.open ? (
    <ToastMessage message={toast?.msg} handleDismiss={() => closeToast()} />
  ) : null;

  const handleLogin = useCallback(() => {
    setLoading(true);

    axios
      .post(`${baseUrl}/support/login/panel/`, fields)
      .then(resp => {
        if ('sessionStorage' in window) {
          sessionStorage.setItem('loggedInAsUserToken', resp?.data?.access);
          sessionStorage.setItem('loggedInAsUserShopId', resp?.data?.shop_id);
          sessionStorage.setItem('loggedInAsUserShopDomain', resp?.data?.shopify_domain);
        }

        api.setAppBridge('', true);
        history.push(PATHS.HOME);
      })
      .catch(err => {
        setLoading(false);
      });
  }, [fields, history]);

  return (
    <Frame>
      <Modal
        open={true}
        small
        noScroll
        title="Login"
        onClose={() => setToast({ open: true, msg: 'YOU CAN NOT CLOSE THIS MODAL' })}
      >
        <Modal.Section>
          <Form preventDefault onSubmit={handleLogin}>
            <FormLayout>
              <TextField
                label="Username"
                labelHidden
                placeholder="Username"
                id="username"
                value={fields?.username}
                onChange={handleUpdateFields}
              />
              <TextField
                label="Password"
                labelHidden
                placeholder="Password"
                type="password"
                id="password"
                value={fields?.password}
                onChange={handleUpdateFields}
              />
              <TextField
                label="Shop"
                labelHidden
                placeholder="Shop"
                id="shop"
                value={fields?.shop}
                onChange={handleUpdateFields}
              />
              <Button primary submit fullWidth loading={loading}>
                Login
              </Button>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>

      {toastMarkup}
    </Frame>
  );
};

export default Login;
