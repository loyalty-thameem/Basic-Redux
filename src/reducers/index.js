import { combineReducers } from "redux";
import counter from "./counter";
import isLoggedIn from "./isLoggedIn";


const store = combineReducers({
    countersss:counter,
    login:isLoggedIn
});
export default store;