import { combineReducers } from "redux";
import { countersFromReducer } from "./counter";
import { isLoggedIn } from "./isLoggedIn";
const store = combineReducers({
    counter: countersFromReducer,
    login: isLoggedIn
})
export default store;