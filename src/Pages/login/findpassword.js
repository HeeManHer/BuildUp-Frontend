import '../../css/page.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

// import {
//     callFindPwdAPI
// } from '../../apis/EmployeeAPICall';

import { POST_LOGIN } from '../../modules/EmployeeModule';

function Findpassword() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const employee = useSelector(state => state.employeeReducer);

    const [form, setForm] = useState({
        employeeId: '',
        employeeName: '',
        employeeEmail: ''
    });

    // useEffect(() => {
    //     if(employee.status == 201){
    //         console.log("[Login] Findpassword SUCCESS {}", employee);
    //         navigate("/login", { replace: true })
    //     }
    // },
    // [employee]);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };    

    // const onClickFindPwdHandler = () => {
    //     dispatch(callFindPwdAPI({
    //         form: form
    //     }));
    // }

    return (
        <div className="find-box">
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
                <input type="email" name="employeeEmail" onChange={onChangeHandler}/>
            </div>
            <button>임시비밀번호 전송</button>
        </div>
    );

}

export default Findpassword;