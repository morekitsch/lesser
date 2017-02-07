import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import UIReducer from './UIReducer';

export default combineReducers({
  auth: AuthReducer,
  UI: UIReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
