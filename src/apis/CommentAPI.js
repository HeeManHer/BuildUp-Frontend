import { ADD_COMMENT, GET_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "../modules/comment";

export function getComment(issueNo) {

  const RequestUrl = "http://localhost:8888/api/v1/issue/" + issueNo + "/comments";


  return async function (dispatch, getState) {

    const result = await fetch(RequestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      }
    }).then(res => res.json());

    dispatch({ type: GET_COMMENT, payload: result.data });
  }

}

export function addComment(comment) {
  const RequestUrl = "http://localhost:8888/api/v1/comments";
  return async function (dispatch, getState) {
    const result = await fetch(RequestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify(comment)
    })
  }
}

export function updateComment(comment) {
  console.log(comment);
  const RequestUrl = "http://localhost:8888/api/v1/comments";
  return async function (dispatch, getState) {
    const result = await fetch(RequestUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify(comment)
    }).then(res => res.json());
    dispatch({ type: UPDATE_COMMENT, payload: result.data });
  }
}

export function deleteComment(no) {
  const RequestUrl = "http://localhost:8888/api/v1/comments/" + no;
  return async function (dispatch, getState) {
    await fetch(RequestUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
    })
  }
}