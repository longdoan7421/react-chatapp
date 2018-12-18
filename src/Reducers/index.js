import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import contactReducer from './contactReducer';

// export default combineReducers({
//   chatReducer,
//   contactReducer
// });

export default (state = {}, action) => {
  return {
    chatReducer: chatReducer(state.chatReducer, action, state),
    contactReducer: contactReducer(state.contactReducer, action, state)
  }
}