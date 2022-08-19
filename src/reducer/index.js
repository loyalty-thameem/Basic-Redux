import counterReducer from './counter';
import isLoggedIn from './isLoggedIn';
import { combineReducers } from 'redux';

const store = combineReducers({
    login: isLoggedIn,
    counter: counterReducer
});
export default store;