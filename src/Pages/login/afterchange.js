// import '../../css/sb-admin-2.min.css';
import '../../css/page.css';
import Modal from './ChangeModal';
import '../../css/loginModal.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import{
    callPutEmployeeAPI
} from '../../apis/EmployeeAPICall';

import { PUT_EMPLOYEE } from '../../modules/EmployeeModule';
import { decodeJwt } from '../../utils/tokenUtils';

function Afterchange() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    // const changeEmployee = useSelector(state => state.employeeReducer);

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
    const[pwd, setPwd] = useState({employeeNo:token.sub});

    /* 내가 해야 될 것 
        1. 현재 비밀번호를 입력 하면 그것이 지금 내가 사용하는 비밀번호와 같은 지 확인 해야됨.
        2. 새 비밀번호를 입력하고, 다시 한 번 입력한 값이 일치하는 지 확인
        3. 2번의 값이 확인되면 새 비밀번호를 database에 update 하기 
     */ 


    const[checkmessage, setCheckMessage]  = useState();



    const ModifyPwd = (e) => {

        setPwd({
            ...pwd, 
            [e.target.name]: e.target.value
        })

    }

   

    const openModal = () => {
        callPutEmployeeAPI(pwd).then(res => setCheckMessage(res.data))
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
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
    );

}

export default Afterchange;