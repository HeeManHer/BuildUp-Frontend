import { SET_USER, CHANGE_USER, SAVE_USER } from "../modules/user";
import { SET_AUTHORITY } from "../modules/authority";

/*restapi 가지고오는 기본 방식*/
export function setUserList(projectNo) {
    const URL = "http://43.201.211.175:8888/api/v1/projects/" + projectNo;

    return async function (dispatch, getState) {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());
        dispatch({ type: SET_USER, payload: result.data });
    }
}

export async function addUserList(userList, projectNo) {
    const URL = `http://43.201.211.175:8888/api/v1/projects/${projectNo}/manager`;

    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
        }
        , body: JSON.stringify(userList)
    })
}


export async function projectTitleEdit(projectNo, projectTitle) {
    const URL = `http://43.201.211.175:8888/api/v1/projects/${projectNo}/manager`;

    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
        }, body: JSON.stringify({ projectNo, projectTitle })
    });
}

export async function authorityEdit(projectNo, employeeNo, roleNo) {
    const URL = `http://43.201.211.175:8888/api/v1/projects/${projectNo}/manager/authority`;
    console.log({ projectNo, employeeNo, roleNo });
    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
        }, body: JSON.stringify({ projectNo, employeeNo, roleNo })
    });
}

export function getAuthority() {
    const URL = "http://43.201.211.175:8888/api/v1/projects/authority";

    return async function (dispatch, getState) {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());
        dispatch({ type: SET_AUTHORITY, payload: result.data });
    }
}

export function changeUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: CHANGE_USER, payload: user });
    }
}

export function saveUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: SAVE_USER, payload: user });
    }
}

export function deleteProjectList(projectNo) {

    const URL = `http://43.201.211.175:8888/api/v1/projects/${projectNo}/manager`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",

            },
        })
    }
}

// export function searchUserList(user) {

//     return function (dispatch, getState) {
//         dispatch({ type: SEARCH_USER, payload: user });
//     }
// }

export function deleteUserList(deleteUser, projectNo) {

    const URL = `http://43.201.211.175:8888/api/v1/projects/${projectNo}/manager/member`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",

            },
            body: JSON.stringify(deleteUser)
        })
    }
}