import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UIReducer from './UIReducer';
import GeoReducer from './GeoReducer';

export default combineReducers({
  auth: AuthReducer,
  geo: GeoReducer,
  UI: UIReducer,
});
