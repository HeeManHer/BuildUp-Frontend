import { GET_SPRINT_ISSUE } from "../modules/Issue";
import { GET_SPRINT } from "../modules/sprint";

export function getSprint(projectNo, currentPage) {
    // console.log(projectNo);

    const URL = `http://43.201.211.175:8888/api/v1/${projectNo}/sprints?offset=${currentPage}`;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        dispatch({ type: GET_SPRINT, payload: result.data });
    }
}

export function getSprintDetail(sprintNo) {
    // console.log(projectNo);

    const URL = `http://43.201.211.175:8888/api/v1/sprints/${sprintNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        dispatch({ type: GET_SPRINT, payload: result });
    }
}

export function getIssue(projectNo) {

    const URL = `http://43.201.211.175:8888/api/v1/${projectNo}/sprints/issue`;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());
        // console.log(result);
        dispatch({ type: GET_SPRINT_ISSUE, payload: result });
    }
}

export async function postSprint(sprint) {
    console.log(sprint);
    const URL = 'http://43.201.211.175:8888/api/v1/sprints';

    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(sprint)
    });
}

export async function putSprint(sprint) {

    const URL = "http://43.201.211.175:8888/api/v1/sprints/" + sprint;

    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(sprint)
    });


}


export async function deleteSprint(sprintNo) {

    const URL = `http://43.201.211.175:8888/api/v1/sprints/${sprintNo}`;

    return await fetch(URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
    });

}


