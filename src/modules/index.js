import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";
import employeeReducer from "./EmployeeModule";
import BacklogReducer from "./Backlog";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer, BacklogReducer, employeeReducer
});

export default rootReducer;