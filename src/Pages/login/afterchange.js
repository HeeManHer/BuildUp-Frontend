// import '../../css/sb-admin-2.min.css';
import '../../css/page.css';
import Modal from './ChangeModal';
import '../../css/loginModal.css';
import React, {useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  callLogoutAPI } from "../../apis/EmployeeAPICall";

import{
    callPutFindEmployeeAPI
} from '../../apis/EmployeeAPICall';

import { PUT_EMPLOYEE } from '../../modules/EmployeeModule';
import { decodeJwt } from '../../utils/tokenUtils';

function Afterchange() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const changeEmployee = useSelector(state => state.employeeReducer.data);
    
    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    // const dispatch = useDispatch();
    // const loginEmployee = useSelector(state => state.employeeReducer); 
    
    // 현재 비밀번호와 일치하는 지 확인해야함
    // const [currentPwd, setCurrentPwd] = useState('');
    // // newPwd, checkNewPwd 두 개가 일치하는 지 확인해야함.
    // const [newPwd, setNewPwd] = useState('');
    // const [checkNewPwd, setCheckNewPwd] = useState('');
    
    const[modalOpen, setModalOpen] = useState(false);
    const[check, setCheck] = useState();
    const[pwd, setPwd] = useState({newPassword: ''});
    

    
    const[checkmessage, setCheckMessage]  = useState();

    useEffect(() => {setPwd({employeeNo:changeEmployee , ...pwd});},
    []);
    
    if(changeEmployee == null) {
        alert("잘못 된 접근입니다.");
        
        return <Navigate to="/auth/login"/>
    }



    
    
    const ModifyPwd = (e) => {

        setPwd({
            ...pwd, 
            [e.target.name]: e.target.value
        })

    }

   

    const openModal = () => {
        if(check){
            
            callPutFindEmployeeAPI(pwd).then(res => setCheckMessage(res.data))
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
            <h1>비밀번호 찾기</h1>
        </div> 
        <hr className="line"/>
        <div className="border">
            <h2>비밀번호 변경</h2>
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
                {pwd.newPassword == undefined || check == undefined ? <></>:    check ? '일치합니다.' : '일치하지 않습니다.'}
            </label>
            <br/>
            <React.Fragment>
            <button onClick={openModal}>수정하기</button>
            <Modal open={modalOpen} close={closeModal} header={checkmessage}>
            </Modal>
            </React.Fragment>
        </div>
    </div>      
    );

}

export default Afterchange;