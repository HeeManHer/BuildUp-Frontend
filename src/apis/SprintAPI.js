import { GET_SPRINT } from "../modules/sprint";

export function getSprint() {

    const URL = "http://localhost:8888/api/v1/sprints";

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());
        dispatch({ type: GET_SPRINT, payload: result.data });
    }
}

export async function postSprint(sprint) {

    const URL = "http://localhost:8888/api/v1/sprints";

    return await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(sprint)
    });

}

export async function putSprint(sprint) {

    const URL = "http://localhost:8888/api/v1/sprints";

    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(sprint)
    });


}

export async function patchSprint(sprint) {

    const URL = "http://localhost:8888/api/v1/sprints";

    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(sprint)
    });


}

export async function deleteSprint(sprintNo) {

    const URL = `http://localhost:8888/api/v1/sprints/${sprintNo}`;

    return await fetch(URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
    });

}


