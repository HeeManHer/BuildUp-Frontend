import {
    GET_EMPLOYEE
   ,POST_LOGIN
   ,POST_FINDPWD
} from '../modules/EmployeeModule';

export function callLoginAPI({form}) {
    // const requestURL =  `http://localhost:8888/auth/login`;
    
    return function (dispatch, getState) {
        dispatch({ type: POST_LOGIN, payload: form});
    };
};
        // const result = await fetch(requestURL, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "*/*",
        //         "Access-Control-Allow-Origin": "*"  
        //     },
        //     body: JSON.stringify({
        //         employeeId: form.employeeId,
        //         employeePwd: form.employeePwd
        //     })
        // })
        // .then(response => response.json());

        // console.log('[EmployeeAPICalls] callLoginAPI RESULT : ', result);
        // if(result.status === 200) {
        //     window.localStorage.setItem('accessToken', result.data.accessToken);
        // }
        // dispatch({ type: POST_LOGIN, payload: result});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export function callGetEmployeeAPI({employeeId}) {
    const requestURL = `https://localhost:8080/api/v1/employees/${employeeId}`;

    return function (dispatch, getState) {
        // const result = await fetch(requestURL, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "*/*",
        //         "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        //     }
        // })
        // .then(response => response.json());

        // console.log('[EmployeeAPICalls] callGetEmployeeAPI RESULT : ', result);

        dispatch({type: GET_EMPLOYEE, payload:employeeId});
    };
}

export function callLogoutAPI() {
    

    return function (dispatch, getState) {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        // console.log('[EmployeeAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}


export function callFindPwdAPI  ({form})  {
    // const requestURL = `http://localhost:8080/auth/findpassword`;

    return function (dispatch, getState) {
        dispatch({ type: POST_FINDPWD,  payload: form });
        
        // const result = await fetch(requestURL, {
            //     method: "POST",
            //     headers: {
                //         "Content-Type": "application/json",
                //         "Accept": "*/*"
                //     },
                //     body: JSON.stringify({
                    //         employeeId: form.employeeId,
        //         employeePassword: form.employeePassword,
        //         employeeName: form.employeeName,
        //         employeeEmail: form.employeeEmail                
        //     })
        // })
        // .then(response => response.json());

        // console.log('[EmployeeAPICalls] callFindPwdAPI RESULT : ', result);        
        
        // if(result.status === 201){
        // }        
    };
}