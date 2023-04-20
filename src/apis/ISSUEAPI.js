import { GET_BACKLOG } from "../modules/Backlog";
import { CREATE_ISSUE, DELETE_ISSUE, UPDATE_ISSUE, SAVE_ISSUE, SEARCH_ISSUE } from "../modules/Issue";
import Issue from "../Pages/issue/Issue.json";

export function SetIssueAPI(projectNo, pageNumber) {
    let RequestUrl = "http://localhost:8888/api/v1/projects/" + projectNo + "/issues?offset=" + pageNumber;

    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: CREATE_ISSUE, payload: result.data });
    }

}

export function SaveIssueAPI(issue) {

    const RequestUrl = "http://localhost:8888/api/v1/projects/" + issue.projectNo + "/issues";
    console.log(JSON.stringify(issue));

    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }, body: JSON.stringify(issue)

        }).then(res => res.json());
        dispatch({ type: "POST", payload: result.data.issues });
    }
}
export function UpdateIssueAPI(issue) {

    const RequestUrl = "http://localhost:8888/api/v1/projects/" + issue.projectNo + "/issues";
    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }, body: JSON.stringify(issue)
        }).then(res => res.json());
        dispatch({ type: "PUT", payload: result.data });
    }
}


export function DeleteIssueAPI(issue) {

    const RequestUrl = "http://localhost:8888/api/v1/projects/" + issue.projectNo + "/issues/" + issue.issueNo;
    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
        })
    }
}

export function GetBacklogListAPI(projectNo) {

    const RequestUrl = "http://localhost:8888/api/v1/projects/" + projectNo + "/issues/backloglist";
    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
        }).then(res => res.json());
        dispatch({ type: GET_BACKLOG, payload: result });
    }
}

export function SearchIssueAPI(searchValue, projectNo) {

    const RequestUrl = "http://localhost:8888/api/v1/projects/" + projectNo + "/issues?search=" + searchValue;

    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: SEARCH_ISSUE, payload: result.data });
    }

}