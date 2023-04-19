import { createActions, handleActions } from "redux-actions";


/* 초기 state값 */
const initialState = {
    data: [{}],
    pageInfo: {}
}

/* 액션 타입 설정 */
export const GET_BACKLOG = "GET_BACKLOG";
export const DELETE_BACKLOG = "DELETE_BACKLOG";
export const POST_BACKLOG = "POST_BACKLOG";
export const PUT_BACKLOG = "PUT_BACKLOG";


/*  액션 함수 */
const actions = createActions({
    [GET_BACKLOG]: () => { },
    [DELETE_BACKLOG]: () => { },
    [POST_BACKLOG]: () => { },
    [PUT_BACKLOG]: () => { },
});


/* 리듀서 함수 */
const BacklogReducer = handleActions(
    {
        [GET_BACKLOG]: (state, { payload }) => payload,
        [DELETE_BACKLOG]: (state, { payload }) => payload,
        [POST_BACKLOG]: (state, { payload }) => payload,
        [PUT_BACKLOG]: (state, { payload }) => payload
    },
    initialState
);

export default BacklogReducer;

