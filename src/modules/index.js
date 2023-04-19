import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";
import employeeReducer from "./EmployeeModule";
import BacklogReducer from "./Backlog";
import SprintReducer from "./sprint";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer, BacklogReducer, employeeReducer,SprintReducer
});

export default rootReducer;