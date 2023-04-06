import { GET_USER, SET_USER, CHANGE_USER, SAVE_USER, DELETE_USER, SEARCH_USER } from "../modules/user";
import User from '../Pages/project/User.json';

export function getUserList() {

    return function (dispatch, getState) {
        dispatch({ type: GET_USER });
    }
}
export function setUserList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_USER, payload: User });
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