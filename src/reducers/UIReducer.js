import {
  UI_DRAWER_TOGGLE
} from '../actions/types';

const INITAL_STATE = {
  drawerOpened: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UI_DRAWER_TOGGLE:
      return { ...state, drawerOpened: action.payload };
    default:
      return state;
  }
};
