import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";
import employeeReducer from "./EmployeeModule";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer, employeeReducer
});

export default rootReducer;