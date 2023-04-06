// import '../../css/sb-admin-2.min.css';
import '../../css/page.css';
import Modal from './ChangeModal';
import '../../css/loginModal.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Changepassword() {

    const[modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="border">
            <div className="now">
                <label>현재 비밀번호 : </label>
                <input type="password" placeholder="현재 비밀번호를 입력하세요" />
            </div>
            <br />
            <br />
            <div className="newPwd">
                <label>새 비밀번호 : </label>
                <input type="password" placeholder="새 비밀번호를 입력하세요" />
            </div>
            <br />
            <br />
            <div className="newOk">
                <lable>새 비밀번호 확인 : </lable>
                <input type="password" placeholder="새 비밀번호 확인" />
            </div>
            <br/>
            <React.Fragment>
            <button onClick={openModal}>수정하기</button>
            <Modal open={modalOpen} close={closeModal} header="비밀번호가 변경되었습니다.">
            </Modal>
            </React.Fragment>
        </div>
    );

}

export default Changepassword;