import {
 UI_DRAWER_TOGGLE
} from './types';

export const drawerToggleAction = (value) => {
  return {
    type: UI_DRAWER_TOGGLE,
    payload: value
  };
};
