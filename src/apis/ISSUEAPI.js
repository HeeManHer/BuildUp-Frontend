import { CREATE_ISSUE, UPDATE_ISSUE, SAVE_ISSUE } from "../modules/Issue";
import Issue from "../Pages/issue/Issue.json";

export function SetIssueAPI() {


    return function SetIssues(dispatch, getState) {


        dispatch({ type: CREATE_ISSUE, payload: Issue });
    }

}

export function UpdateIssueAPI(issue) {

    return function UpdateIssue(dispatch, getState) {

        dispatch({ type: UPDATE_ISSUE, payload: Issue });
    }
}

export function SaveIssueAPI(issue) {

    return function SaveIssue(dispatch, getState) {

        dispatch({ type: SAVE_ISSUE, payload: Issue });
    }
}