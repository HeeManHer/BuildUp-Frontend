import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import 로그인창 from '../../img/로그인창.png';

import {
    callPOSTFindEmployeeAPI
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

        if (loginEmployee.message === "정보가 일치합니다") {
            console.log("[Login] Login SUCCESS {}", loginEmployee);
            navigate("./afterchange", { replace: true });
        } else if (form.employeeName && form.employeeNo && form.employeeEmail) {
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
        dispatch(callPOSTFindEmployeeAPI({	// 로그인
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
    <div>
            <div className="newproject">
                <h1>비밀번호 찾기</h1>
            </div> 
            <hr className="line"/>
            <div className="find-box" style={{ zIndex:'1'}}>
                    <h2>&nbsp;비밀번호 찾기</h2>
                    <hr className="line"/>
                    <div className="name">
                    <br/>
                    <label>&nbsp;&nbsp;&nbsp;이름 : &nbsp;&nbsp;</label>
                    <input type="text" name="employeeName" onChange={onChangeHandler} />
                </div>
                    <br />
                    <hr />
                <div className="id">
                    <br/>
                    <label>&nbsp;&nbsp;&nbsp;사번 : &nbsp;&nbsp;</label>
                    <input type="text" name="employeeNo" onChange={onChangeHandler} />
                </div>
                    <br />
                    <hr />
                <div className="email">
                    <br/>
                    <label>이메일 : &nbsp;</label>
                    <input type="email" name="employeeEmail" onChange={onChangeHandler} />
                </div>
                <br/>
                <hr/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={onClickLoginHandler} className="btn btn-outline-primary">비밀번호 재설정</button>
                    <br/>
                    <br/>
        </div>
      
    </div>
         
    );

}

export default Findpassword;