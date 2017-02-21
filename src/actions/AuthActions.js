import firebase from 'firebase';
import { purgeStoredState } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

export const logOutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });

    firebase.auth().signOut()
      .then(() => logOutUserSuccessPurgeCache(dispatch, ''))
      .catch(() => logOutUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};


const logOutUserFail = (dispatch) => {
  dispatch({ type: LOGOUT_USER_FAIL });
};

const logOutUserSuccessPurgeCache = (dispatch, user) => {
  purgeStoredState({ storage: AsyncStorage }).then(() => {
    console.log('purge of someReducer completed');
  }).catch(() => {
    console.log('purge of someReducer failed');
  });

  dispatch({
    type: LOGOUT_USER_SUCCESS,
    payload: user
  });
};
