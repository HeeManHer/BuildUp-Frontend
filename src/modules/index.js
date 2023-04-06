import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer
});

export default rootReducer;