import { GET_USER, SET_USER, CHANGE_USER, SAVE_USER, DELETE_USER, SEARCH_USER } from "../modules/user";
import User from '../Pages/project/User.json';

export function getUserList() {

    return function (dispatch, getState) {
        dispatch({ type: GET_USER });
    }
}
/*restapi 가지고오는 기본 방식*/
export function setUserList(projectNo) {
    const URL="http://localhost:8888/api/v1/projects/"+projectNo;

    return async function (dispatch, getState) {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());
        dispatch({ type: SET_USER, payload: result.data });
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

export function deleteUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: DELETE_USER, payload: user });
    }
}

export function searchUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: SEARCH_USER, payload: user });
    }
}