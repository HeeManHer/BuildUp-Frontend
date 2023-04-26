import { GET_EMPLOYEE } from "../modules/employeebtn";


export function EmployeebtnAPI(projectNo, employeeNo) {

    const URL = "http://43.201.211.175:8888/api/v1/backlogs/authority?projectNo=" + projectNo + "&employeeNo=" + employeeNo;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());
        dispatch({ type: GET_EMPLOYEE, payload: result.data });
    }
}