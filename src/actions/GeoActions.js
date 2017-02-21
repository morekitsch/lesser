import firebase from 'firebase';
import {
GEO_DRIVER_CREATE,
GEO_DRIVER_SET,
GEO_DRIVER_GET
} from './types';


export const geoDriverCreate = ({ latitude, longitude }) => {
  const { currentUser } = firebase.auth();
  //const currentUser = { uid: 'JuzBhV6uFEQZG7QQWcoIUDsKWHq1' };
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/location`)
      //.push({ latitude })
      .set({ latitude, longitude })
      .then(() => {
        dispatch({ type: GEO_DRIVER_CREATE });
      });
  };
};

export const geoDriverGet = () => {
  const { currentUser } = firebase.auth();
//const currentUser = { uid: 'JuzBhV6uFEQZG7QQWcoIUDsKWHq1' };

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/location`)
      .on('value', snapshot => {
        dispatch({ type: GEO_DRIVER_GET, payload: snapshot.val() });
      });
  };
};

export const geoDriverSet = ({ position }) => {
  const { currentUser } = firebase.auth();
  const { lat, long } = position;

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/location`)
      .set({ position })
      .then(() => {
        dispatch({ type: GEO_DRIVER_SET });
      });
  };
};
