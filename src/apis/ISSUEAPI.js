import { CREATE_ISSUE, UPDATE_ISSUE, SAVE_ISSUE, DELETE_ISSUE } from "../modules/Issue";
import Issue from "../Pages/issue/Issue.json";

export function SetIssueAPI() {


    return function (dispatch, getState) {


        dispatch({ type: CREATE_ISSUE, payload: Issue });
    }

}

export function SaveIssueAPI(issue) {

    return function (dispatch, getState) {

        dispatch({ type: SAVE_ISSUE, payload: issue });
    }
}

export function UpdateIssueAPI(issue) {

    return function (dispatch, getState) {

        dispatch({ type: UPDATE_ISSUE, payload: issue });
    }
}

export function DeleteIssueAPI(issue) {

    return function (dispatch, getState) {

        dispatch({ type: DELETE_ISSUE, payload: issue });
    }
}