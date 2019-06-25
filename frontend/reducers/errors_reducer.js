import { combineReducers } from 'redux';

import sessionReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionReducer
});
