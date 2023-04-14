import { createActions, handleActions } from "redux-actions";


/* 초기 state값 */
const initialState = [

];

/* 액션 타입 설정 */
export const GET_BACKLOG = 'GET_BACKLOG';


/*  액션 함수 */
const actions = createActions({
    [GET_BACKLOG]: () => { }
});


/* 리듀서 함수 */
const BacklogReducer = handleActions(
    {
        [GET_BACKLOG]: (state, { payload }) => payload
    },
    initialState
);

export default BacklogReducer;

