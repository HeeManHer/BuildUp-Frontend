import { combineReducers } from "redux";
import IssueReducer from "./Issue";
import userReducer from "./user";
import authorityReducer from "./authority";
import employeeReducer from "./EmployeeModule";
import BacklogReducer from "./Backlog";
import CommentReducer from "./comment";
import SprintReducer from "./sprint";
import employeebtnReducer from "./employeebtn";

const rootReducer = combineReducers({
    IssueReducer, userReducer, authorityReducer, BacklogReducer, employeeReducer, SprintReducer, CommentReducer, employeebtnReducer
});

export default rootReducer;