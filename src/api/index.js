import createApp from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge-utils';
import axios from 'axios';

import { baseUrl } from 'config/baseUrl';
import { PATHS } from 'config/constants';

class Api {
  constructor(baseUrl) {
    this.axios = axios.create();
    this.axios.defaults.baseURL = baseUrl;
    this.axios.defaults.timeout = 90000;
    this.axios.defaults.headers['Content-Type'] = 'application/json';
  }

  setAppBridge(host, loggedInAsUser = false) {
    this.loggedInAsUser = loggedInAsUser;

    if (!loggedInAsUser) {
      this.app = createApp({
        apiKey: process.env.REACT_APP_API_KEY,
        host,
        forceRedirect: false,
      });
    }

    this.axios.interceptors.request.use(config => {
      if (loggedInAsUser) {
        config.headers['Authorization'] = this._getToken();
        config.headers['admin-login'] = true;
        return config;
      }

      return getSessionToken(this.app).then(token => {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
      });
    });
  }

  _getToken() {
    let token;
    if ('sessionStorage' in window) token = sessionStorage.getItem('loggedInAsUserToken');
    if (!token) return '';
    return `Bearer ${token}`;
  }

  _handleErrors(err) {
    if (err?.response?.status === 401) {
      if (this.loggedInAsUser) {
        window.open(window.location.origin + PATHS.LOGIN + '?message=INVALID_TOKEN', '_self');
      } else {
        // What to do in shopify iframe
      }
    }

    return Promise.reject(err);
  }

  async get(...params) {
    return this.axios.get(...params).catch(err => this._handleErrors(err));
  }

  async post(...params) {
    return this.axios.post(...params).catch(err => this._handleErrors(err));
  }

  async patch(...params) {
    return this.axios.patch(...params).catch(err => this._handleErrors(err));
  }

  async put(...params) {
    return this.axios.put(...params).catch(err => this._handleErrors(err));
  }

  async delete(...params) {
    return this.axios.delete(...params).catch(err => this._handleErrors(err));
  }

  // Authentication
  loginAsUser(data) {
    return this.post(`/support/login/panel/`, data);
  }

  // Your API calls
  getSomeResource(shopId) {
    return this.get(`/path/to/${shopId}/resource/`);
  }

  getProducts(data) {
    return this.get(`/products/`, data);
  }
}

export const api = new Api(baseUrl);
