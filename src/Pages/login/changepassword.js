// import '../../css/sb-admin-2.min.css';
import '../../css/page.css';
import Modal from './ChangeModal';
import '../../css/loginModal.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callGetEmployeeAPI, callLogoutAPI } from "../../apis/EmployeeAPICall";

import {
    callPutEmployeeAPI
} from '../../apis/EmployeeAPICall';

import { PUT_EMPLOYEE } from '../../modules/EmployeeModule';
import { decodeJwt } from '../../utils/tokenUtils';

function Changepassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
 
    const [modalOpen, setModalOpen] = useState(false);
    const [check, setCheck] = useState();
    const [pwd, setPwd] = useState({ employeeNo: token.sub });

   

    const [checkmessage, setCheckMessage] = useState();



    const ModifyPwd = (e) => {

        setPwd({
            ...pwd,
            [e.target.name]: e.target.value
        })

    }


    const openModal = () => {
        if(check){
            
            callPutEmployeeAPI(pwd).then(res => setCheckMessage(res.data))
            setModalOpen(true);
        } else {
           alert("비밀번호가 일치하지 않습니다.")
        }
        
    };

    const closeModal = () => {
        if(checkmessage == "비밀번호 변경 성공 !!") {
            window.localStorage.removeItem("accessToken");
            setModalOpen(false);
            navigate("/", { replace: true });
            dispatch(callLogoutAPI());
        } else {
            setModalOpen(false);
        }
    };

    return (
    <div>  
        <div className="newproject">
            <h1>마이페이지</h1>
        </div> 
        <hr className="line"/>
        <div className="border2">
            <h2>비밀번호 변경</h2>
            <div className="now">
                <label>현재 비밀번호 : </label>
                <input type="password" name="employeePassword" placeholder="현재 비밀번호를 입력하세요" onChange={ModifyPwd} />
            </div>
            <br />
            <br />
            <div className="newPwd">
                <label>새 비밀번호 : </label>
                <input type="password" name="newPassword" placeholder="새 비밀번호를 입력하세요" onChange={ModifyPwd} />
            </div>
            <br />
            <br />
            <div className="newOk">
                <lable>새 비밀번호 확인 : </lable>
                <input type="password" placeholder="새 비밀번호 확인" onChange={e => e.target.value === pwd.newPassword ? setCheck(true) : setCheck(false)} />
            </div>
            <label>
                {pwd.newPassword == undefined || check == undefined ? <></> : check ? '일치합니다.' : '일치하지 않습니다.'}

            </label>
            <br />
            <React.Fragment>
                <button class="btn btn-outline-primary" onClick={openModal}>수정하기</button>
                <Modal open={modalOpen} close={closeModal} header={checkmessage}>
                </Modal>
            </React.Fragment>
        </div>
    </div>    
    );

}

export default Changepassword;