import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [];

/* 액션 타입 설정 */
export const GET_COMMENT = 'comment/GET_COMMENT';
export const ADD_COMMENT = 'comment/ADD_COMMENT';
export const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
export const DELETE_COMMENT = 'comment/DELETE_COMMENT';

/*  액션 함수 */
const actions = createActions({
    [GET_COMMENT]: () => {},
    [ADD_COMMENT]: () => {},
    [UPDATE_COMMENT]: () => {},
    [DELETE_COMMENT]: () => {}
});


/* 리듀서 함수 */
const CommentReducer = handleActions(
    { [GET_COMMENT]: (state, { payload }) => payload,
        [ADD_COMMENT]: (state, { payload }) => payload,
        [UPDATE_COMMENT]: (state, { payload }) => payload,
        [DELETE_COMMENT]: (state, { payload }) => payload
    },
    initialState
);

export default CommentReducer;