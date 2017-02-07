import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from '../actions/types';

const INITAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false
 };

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
      case LOGOUT_USER_SUCCESS:
        return { ...state, ...INITAL_STATE, email: action.payload };
      case LOGOUT_USER_FAIL:
        return { ...state, error: 'Logout Failed.', password: '', loading: false };
    default:
      return state;
  }
};
