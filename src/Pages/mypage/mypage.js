import '../../css/page.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Changepassword from '../login/changepassword';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';

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
            if(token !== null) {
                dispatch(callGetEmployeeAPI({	
                    employeeNo: token.sub,
                    
                }));            
            }
        }
        ,[]
    );


        // 토큰이 없기 때문에 오류가 나는 것이 당연하다.

    const onClickModifyHandler = () => { 
        navigate("./changepassword")
    }

   
    return (


        // <div className="border">
        //     <h2>내정보</h2>
        //     <div className="myname">
        //         <label>이름 : 허희만</label>
        //         {/* <input type="text" placeholder="이름을 입력하세요" /> */}
        //     </div>
        //     <br />
        //     <br />

        //     <br />
        //     <br />
        //     <div className="passwordupdate">
        //         <label>비밀번호 : </label>
        //         {/* 버튼에 링크 or 핸들러 이용해서 수정페이지로 넘어가게 해야됨 */}
        //         {/* 수정필요 */}
        //         <button onClick={onClickModifyHandler}>  수정하기</button>
        //     </div>
        //     <br />
        //     <br />

        //     <br />
        //     <br />
        //     <div className="myemail">
        //         <label>Email : heeman0401@naver.com</label>
        //         {/* <input type="email" placeholder="이메일" /> */}
        //     </div>
        // </div>
        <div className="border">

            { employeeDetail &&
            <div className="myname">
                <h1>내 정보</h1>
                <input 
                    type="text" 
                    placeholder="이름" 
                    readOnly={true}
                    value={employeeDetail.employeeName || ''}
                />
                <label>비밀번호 : </label>
                <button onClick={onClickModifyHandler}>  수정하기</button>
                <input 
                    type="text" 
                    placeholder="이메일" 
                    readOnly={true}
                    value={employeeDetail.employeeEmail || ''}
                />
            </div>

            }
        </div>
    );
}
export default Mypage;