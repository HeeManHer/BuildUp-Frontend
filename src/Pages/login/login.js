import '../../css/page.css';
import 로그인창 from '../../img/로그인창.png';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import Changebutton from './Changebutton';

import {
    callLoginAPI
} from '../../apis/EmployeeAPICall'

import {POST_LOGIN} from '../../modules/EmployeeModule';

function Login() {

    const navigate = useNavigate();

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginEmployee = useSelector(state => state.employeeReducer);  // API 요청하여 가져온 loginMember 정보
    
    // 폼 데이터 한번에 변경 및 State에 저장    
    const [form, setForm] = useState({
        employeeNo: '',
        employeePwd: ''
    });

    useEffect(() => {
        
        if(loginEmployee.status === 200){
            console.log("[Login] Login SUCCESS {}", loginEmployee);
            navigate("/", { replace: true });
        }
    }
    ,[loginEmployee]);
    
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
    const onClickFindPwdHandler = () => { 
        navigate("./findpassword", { replace: true })
    }

    // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
    const onClickLoginHandler = () => { 
        dispatch(callLoginAPI({	// 로그인
            form: form
            
        }),
        navigate("../../mypage"));
    }
    
    return (
        <div>
            <img src={로그인창} style={{height:'750px'}}/>
            <div className="login-box">
                <h2>Build-Up</h2>
                <form>
                    <div className="user-box">
                        <input 
                        type="text" 
                        name="employeeNo"
                        placeholder="사번을 입력하세요." 
                        onChange={onChangeHandler} 
                        
                        />
                        <label>사번</label>
                    </div>
                    <div className="user-box">
                        <input 
                        type="password"
                        name="employeePassword"
                        placeholder='비밀번호를 입력하세요.' 
                        onChange={onChangeHandler}
                        
                        />
                        <label>Password</label>
                    </div>
                    <button 
                    className='btn1'
                    type='button'
                    onClick={onClickLoginHandler}
                    >
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        로그인
                    </a>
                    </button>
                    <button 
                    className='btn2'
                    onClick={onClickFindPwdHandler}
                    >
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        비밀번호 찾기
                    </a>
                    </button>
                </form>
            </div>
        </div>
        
         
    );
}

export default Login;