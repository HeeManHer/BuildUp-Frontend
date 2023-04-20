// import { createActions, handleActions } from "redux-actions";


// /* 초기 state값 */
// const initialState = [

// ];

// /* 액션 타입 설정 */
// export const GET_SPRINT = 'GET_SPRINT';
// export const CREATE_SPRINT = 'CREATE_SPRINT';
// export const UPDATE_SPRINT = 'UPDATE_SPRINT';
// export const SAVE_SPRINT = 'SAVE_SPRINT';
// export const DELETE_SPRINT = "DELETE_SPRINT";
// // export const SEARCH_SPRINT = "SEARCH_SPRINT";

// /*  액션 함수 */
// const actions = createActions({
//     [GET_SPRINT]: () => { },
//     [CREATE_SPRINT]: () => { },
//     [UPDATE_SPRINT]: () => { },
//     [SAVE_SPRINT]: () => { },
//     [DELETE_SPRINT]: () => { },
//     // [SEARCH_SPRINT]: () => { },
// });


// /* 리듀서 함수 */
// const SprintReducer = handleActions(
//     {
//         [SAVE_SPRINT]: (state, { payload }) => {
//             return [...state, payload]
//         },
//         [GET_SPRINT]: (state, { payload }) => payload,
//         [CREATE_SPRINT]: (state, { payload }) => payload,
//         [UPDATE_SPRINT]: (state, { payload }) => state.map(sprint => sprint.id == payload.id ? payload : issue),
//         [DELETE_SPRINT]: (state, { payload }) => state.filter(sprint => sprint.id !== payload.id),
//         // [SEARCH_SPRINT]: (state, { payload }) => payload
//     },
//     initialState
// );

// export default SprintReducer;