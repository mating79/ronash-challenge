import { DEFAULT_BASE_URL } from './constants';

export const baseUrl = process.env.REACT_APP_API_BASE_URL
  ? process.env.REACT_APP_API_BASE_URL
  : DEFAULT_BASE_URL;
