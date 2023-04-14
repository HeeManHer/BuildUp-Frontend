import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";
import BacklogReducer from "./Backlog";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer, BacklogReducer
});

export default rootReducer;