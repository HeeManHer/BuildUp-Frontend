
import { 
    GET_EMPLOYEE
  , POST_LOGIN
  , POST_REGISTER
  , PUT_EMPLOYEE
  
} from '../modules/EmployeeModule';

export const callGetEmployeeAPI = ({employeeNo}) => {
    const requestURL = `http://localhost:8888/api/v1/auth/login/${employeeNo}`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        console.log('[EmployeeAPICalls] callGetEmployeeAPI RESULT : ', result);

        dispatch({ type: GET_EMPLOYEE,  payload: result });
        
    };
}



export const callLoginAPI = ({form}) => {
    const requestURL = `http://localhost:8888/auth/login`;

    return async (dispatch, getState) => {  

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                employeeNo: form.employeeNo,
                employeePassword: form.employeePassword
            })
        })
        .then(response => response.json());

        // result에 data가 없어서 안 뜨는 것 같음.
        console.log('[EmployeeAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}


export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[EmployeeAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}

export  const  callPutEmployeeAPI = async (modifyPwd) => {
    const requestURL = `http://localhost:8888/api/v1/changepassword/${modifyPwd.employeeNo}`;
    
            // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
            // 서버에서 cors 허용을 해주어야 함

    return await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body: JSON.stringify(modifyPwd)
        })
        .then(response => response.json());
        
    
}



export  const  callPutFindEmployeeAPI = async (modifyPwd) => {
    const requestURL = `http://localhost:8888/api/v1/password`;
    
            // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
            // 서버에서 cors 허용을 해주어야 함

    return await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body: JSON.stringify(modifyPwd)
        })
        .then(response => response.json());
}



export const callPOSTFindEmployeeAPI = ({form}) => {
    const requestURL = `http://localhost:8888/api/v1/member`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
            ,body: JSON.stringify({
                employeeNo: form.employeeNo,
                employeeName: form.employeeName,
                employeeEmail: form.employeeEmail
            })
        })

        .then(response => response.json());

        // console.log('[EmployeeAPICalls] callGetEmployeeAPI RESULT : ', result);

        dispatch({ type: GET_EMPLOYEE,  payload: result });
        
    };
}

export const callLoginAPI1 = ({form}) => {
    const requestURL = `http://localhost:8888/auth/login`;

    return async (dispatch, getState) => {  

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                employeeName: form.employeeName,
                employeeNo: form.employeeNo,
                employeeEmail: form.employeeEmail
            })
        })
        .then(response => response.json());

        // result에 data가 없어서 안 뜨는 것 같음.
        console.log('[EmployeeAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}