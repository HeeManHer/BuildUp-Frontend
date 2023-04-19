import { GET_BACKLOG, DELETE_BACKLOG, POST_BACKLOG, PUT_BACKLOG } from '../modules/Backlog';

export function getBacklog(projectNo, pageNo, searchValue) {

    let URL = "http://localhost:8888/api/v1/" + projectNo + "/backlogs?offset=" + pageNo + "&search=" + searchValue;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        dispatch({ type: GET_BACKLOG, payload: result.data });
    }
}

export function postBacklog(backlog) {

    const URL = "http://localhost:8888/api/v1/project/" + backlog.projectNo + "/backlogs";

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(backlog)
        }).then(response => response.json());
        dispatch({ type: POST_BACKLOG, payload: result.data });
    }
}

export function putBacklog(backlog) {

    const URL = "http://localhost:8888/api/v1/project/" + backlog.projectNo + "/backlogs";
    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(backlog)
        }).then(response => response.json());
        dispatch({ type: PUT_BACKLOG, payload: result.data });

    }
}

export function deleteBacklog(backlog) {

    const URL = `http://localhost:8888/api/v1/backlogs/${backlog.backlogNo}`;

    return async function (dispatch, getState) {
        const result = await fetch(URL, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
        })
    }
}


export function searchBacklog(searchValue, projectNo) {

    const URL = "http://localhost:8888/api/v1/" + projectNo + "/backlogs?search=" + searchValue;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
        }).then(response => response.json());

        dispatch({ type: GET_BACKLOG, payload: result.data });
    }
}


