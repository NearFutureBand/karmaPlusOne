import { combineReducers } from 'redux';
import historyReducer from './historyReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  history: historyReducer,
  post: postReducer,
  profile: profileReducer,
});
