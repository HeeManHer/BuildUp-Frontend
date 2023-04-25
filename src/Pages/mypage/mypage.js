import '../../css/page.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Changepassword from '../login/changepassword';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import '../../css/project.css';

import {
    callGetEmployeeAPI
} from '../../apis/EmployeeAPICall';

function Mypage() {

    // const navigate = useNavigate();

    // const goToMyPage = () => {
    //     navigate('/changepassword');
    // };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employee = useSelector(state => state.employeeReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const employeeDetail = employee.data;

    useEffect(
        () => {
            console.log('token', token.sub);
            if (token !== null) {
                dispatch(callGetEmployeeAPI({
                    employeeNo: token.sub,

                }));
            }
        }
        , []
    );


    // 토큰이 없기 때문에 오류가 나는 것이 당연하다.

    const onClickModifyHandler = () => {
        navigate("./changepassword")
    }


    return (
    <div>    
        <div className="newproject">
            <h1>마이페이지</h1>
        </div> 
        <hr className="line"/>
        <div className="border">
            {employeeDetail &&
                <div className="myname">
                    <h1>내정보</h1>
                    <input
                        type="text"
                        placeholder="이름"
                        readOnly={true}
                        value={employeeDetail.employeeName || ''}
                    />
                    <label>비밀번호 : </label>
                    <button class="btn btn-outline-primary" onClick={onClickModifyHandler}>  수정하기</button>
                    <input
                        type="text"
                        placeholder="이메일"
                        readOnly={true}
                        value={employeeDetail.employeeEmail || ''}
                    />
                </div>

            }
        </div>
    </div>    
    );
}
export default Mypage;