import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITAL_STATE;
    default:
      return state;
  }
};
