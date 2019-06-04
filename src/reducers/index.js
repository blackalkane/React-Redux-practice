import { combineReducers } from 'redux';

import messagesReducer from './Messages';

const AppReducer = combineReducers({
  messages: messagesReducer,
});

export default AppReducer;
