import {
  GEO_DRIVER_CREATE,
  GEO_DRIVER_SET,
  GEO_DRIVER_GET
} from '../actions/types';

const INITAL_STATE = {
    latitude: 0,
    longitude: 0
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GEO_DRIVER_SET:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, position: action.payload };
    case GEO_DRIVER_CREATE:
      return INITAL_STATE;
    case GEO_DRIVER_GET:
    console.log(action.payload);
      return { ...state, latitude: action.payload, longitude: action.payload };
    default:
      return state;
  }
};
