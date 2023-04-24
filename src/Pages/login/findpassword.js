import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    callLoginAPI1
} from '../../apis/EmployeeAPICall'

import { POST_LOGIN } from '../../modules/EmployeeModule';

function Findpassword() {

    const navigate = useNavigate();

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginEmployee = useSelector(state => state.employeeReducer);  // API 요청하여 가져온 loginMember 정보

    // 폼 데이터 한번에 변경 및 State에 저장    
    const [form, setForm] = useState({
        employeeName: '',
        employeeNo: '',
        employeeEmail: ''

    });

    useEffect(() => {

        if (loginEmployee.status === 200) {
            console.log("[Login] Login SUCCESS {}", loginEmployee);
            navigate("./afterchange", { replace: true });
        } else if (loginEmployee.status !== 200) {
            alert("정보를 찾을 수 없습니다.")
        }
    }
        , [loginEmployee]);

    // 로그인 상태일 시 로그인페이지로 접근 방지
    // if(loginEmployee.length > 0) {
    //     console.log("[Login] Login is already authenticated by the server");        
    //     return <Navigate to="/"/>
    // }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 회원가입페이지로 넘어가는 화면 나는 비밀번호 찾기 화면으로 가야한다. 



    // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
    const onClickLoginHandler = () => {
        dispatch(callLoginAPI1({	// 로그인
            form: form

        }),
            navigate("./"));
    }

    // const onClickFindPwdHandler = () => {
    //     dispatch(callFindPwdAPI({
    //         form: form
    //     }));
    // }

    return (
        <div className="find-box" >
            <h2>비밀번호 찾기</h2>
            <div className="name">
                <label>이름 : </label>
                <input type="text" name="employeeName" onChange={onChangeHandler} />
            </div>
            <br />
            <br />
            <hr />
            <div className="id">
                <label>사번 : </label>
                <input type="text" name="employeeId" onChange={onChangeHandler} />
            </div>
            <br />
            <br />
            <hr />
            <div className="email">
                <label>이메일 : </label>
                <input type="email" name="employeeEmail" onChange={onChangeHandler} />
            </div>
            <button class="btn btn-outline-primary" onClick={onClickLoginHandler}>임시비밀번호 전송</button>
        </div>
    );

}

export default Findpassword;