import { SEARCH_ISSUE } from "../modules/Issue";
import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "../modules/comment";


export function SearchIssueAPI(searchValue) {

    const RequestUrl = "http://localhost:8888/api/v1/issues/search?search=" + searchValue;

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

export function addComment() {

    const RequestUrl = "http://localhost:8888/api/v1/comments";

    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "POST", // HTTP 요청 메서드를 POST로 변경
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: ADD_COMMENT, payload: result.data });
    }

}

export function updateComment(comment) {

    const RequestUrl = "http://localhost:8888/api/v1/comments";
    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "PUT", // HTTP 요청 메서드를 PUT으로 변경
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }, body: JSON.stringify(comment)
        }).then(res => res.json());
        dispatch({ type: "PUT", payload: result.data });
    }
}

export function deleteComment(comment) {

    const RequestUrl = "http://localhost:8888/api/v1/comments/" + comment.id; // comment.id 값을 추가해줌
    return async function (dispatch, getState) {

        const result = await fetch(RequestUrl, {
            method: "DELETE", // HTTP 요청 메서드를 DELETE로 변경
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
        })
    }
}