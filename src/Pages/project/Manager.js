import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "../../css/project.css";

import { addUserList, setUserList, changeUserList, deleteUserList, deleteProjectList, projectTitleEdit, authorityEdit } from '../../apis/UserListAPI';
import { getProjectDetail } from '../../apis/NewprojectAPICalls';

function Manager() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { projectNo } = useParams();
    
    const [project, setProject] = useState('');
    const [deleteUser, setDeleteUser] = useState([]);
    const [inviteText, setInviteText] = useState('');
    const [inviteList, setInviteList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const [edit, setEdit] = useState(false);
    const [projectTitle, setProjectTitle] = useState('');
    const [selected, setSelected] = useState([]);

    const userList = useSelector(state => state.userReducer);
    const selectList = userList.map((user) => ({roleNo: user.roleNo, roleName : user.roleName}));
    const authority = userList.map((user) => ({roleNo: user.roleNo, roleName : user.role}));
    
    
    useEffect(
        () => {
            dispatch(setUserList(projectNo));
            getProjectDetail(projectNo).then(data => setProject(data));
        },
        []
    )

    /* 권한 수정 버튼 */
    const handlerSelect = (user, e) => {
        setSelected(e.target.value);
        authorityEdit(projectNo, user.employeeNo, e.target.value);
    }

    /* 프로젝트 명 수정 버튼 */
    const onClickProjectTitleEditBtn = () => {
        setEdit(true);        
        setProjectTitle(project.projectTitle);
    }
    

    /* input text로 바뀜 */
    const handleInputChange = (e) => {
        setProjectTitle(e.target.value);
    }
    

    /* 프로젝트 명 저장 버튼 */
    const handleProjectTitleUpdate = (e) => {
        e.preventDefault();
        setEdit(false);
        projectTitleEdit(projectNo, projectTitle);
        window.location.reload();
    }


    /* 프로젝트 삭제 버튼 */
    const onClickProjectDeleteBtn = () => {

        dispatch(deleteProjectList(projectNo));
        navigate("../../../");
    }
    

    /* 모달 열기(추가) 버튼 */
    const handleOpenModal = () => {
        setIsModalOpen(true);            
    };


    /* 모달 안에서 팀원 추가 버튼 */
    const handleInviteAdd = () => {
        if (inviteText == null || inviteText == "")
            return;
        setInviteList([...inviteList, { roleNo: 2, employeeName: inviteText }]);
        setInviteText('');
    }

    
    /* 팀원 초대에서 textChange */
    const handleInviteTextChange = (event) => {
        setInviteText(event.target.value);
    }


    /* 모달 안에서 팀원 초대한 사람 삭제 버튼 */
    const handleInviteRemove = (index) => {
        setInviteList(inviteList.filter(invite => inviteList.indexOf(invite) !== index));
    }


    /* 모달 안에서 맨 아래 추가 버튼 */
    const handleSubmit = (event) => {
        event.preventDefault();
        addUserList({ projectNo: projectNo, employeeName: inviteList }, projectNo);
        setInviteList([]);
        handleCloseModal();
        window.location.reload();
    }


    /* 모달 안에서 맨 아래 취소 버튼 */
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemIndex(-1);         //false면 생성불가능함
    }


    /* 권한 수정 */
    const onChangeAuthority = (user, value) => {

        user = {
            ...user,
            authority: value
        };

        dispatch(changeUserList(user));
    }


    /* 사원 checkbox 버튼 */
    const onDeleteUserChecked = (userNo, isChecked) => {
        if (isChecked) {
            setDeleteUser([...deleteUser, userNo]);
        } else {
            setDeleteUser(deleteUser.filter(user => user !== userNo));
        }
    }


    /* 팀원 삭제 버튼 */
    const onClickDeleteBtn = () => {

        dispatch(deleteUserList(deleteUser, projectNo));
        window.location.reload();
    }


    return (
        <div>
            {/* 모달스타일 적용 */}
            <div style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',


                    }}
                    onClick={handleCloseModal}
                />
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div style={{ background: '#fff', padding: 30, borderRadius: '10px', width: '600px', height: '600px' }}>
                        <h6 className="smalltitle">팀원 추가</h6>
                        <hr className="line3" />
                        <br />
                        <form onSubmit={handleSubmit}>

                            <h3 className="smalltitle2">팀원 추가</h3>
                            <br />
                            <br />
                            <label className="title">
                                제목 : {project.projectTitle}
                            </label>
                            <br />
                            <br />
                            <label className="manager">
                                담당자 : {project.employeeName}
                            </label>
                            <br />
                            <br />
                            <div>
                                <div className="invite">
                                    <label>
                                        팀원 초대 : <input
                                            type="text"
                                            value={inviteText}
                                            onChange={handleInviteTextChange}
                                            style={{ width: "395px" }} />
                                        <button className="btn btn-success btn-icon-split btn-sm" type="button" onClick={handleInviteAdd}>추가</button>
                                    </label>
                                    <div className="row" style={{ overflow: "auto", height: "150px" }}>
                                        {inviteList.map((invite, index) => (
                                            <div key={index}
                                                style={{
                                                    border: "1px solid black",
                                                    padding: "5px",
                                                    margin: "5px",
                                                    display: "flex",
                                                    height: "40px"
                                                }}>
                                                <div>{invite.employeeName}</div>
                                                <button className='btn btn-danger btn-icon-split icon text-white fas fa-trash btn-sm'
                                                    type="button"
                                                    style={{ marginLeft: "20px" }}
                                                    onClick={() => { handleInviteRemove(index) }}>삭제</button></div>
                                        ))}
                                    </div>
                                </div>
                                <br />
                            </div>
                            <button className='button2' type="submit" >{selectedItemIndex === -1 ? '추가' : 'Save'}</button>
                            <button className="button3" type="button" onClick={() => handleCloseModal()}>{selectedItemIndex === -1 ? "취소" : "Cancel"}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="newproject">
                <h1>프로젝트 관리/<span id="size">{project.projectTitle}</span></h1>
                <button className="button1" onClick={onClickProjectDeleteBtn} >프로젝트 삭제</button>
            </div>
            <hr className="line" />
            <div className="projectname">
                {edit ? (
                    <form onSubmit={handleProjectTitleUpdate}>
                        <input type="text" value={projectTitle} onChange={handleInputChange} />
                        <button className="button5" type="submit">수정</button>
                    </form>
                ) : (
                    <>
                        <h3>프로젝트 명 : </h3>
                        <br />
                        <h6 id="name">{project.projectTitle}</h6>
                        <button className="button5" onClick={onClickProjectTitleEditBtn}>
                            수정
                        </button>
                    </>
                )}
            </div>

            <br />
            <table className="user-table" width="90%">
                <thead>
                    <tr>
                        <th></th>
                        <th>이름</th>
                        <th>사번</th>
                        <th>이메일</th>
                        <th>권한</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.no}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="delete"
                                    id={user.employeeNo}
                                    value={user.employeeNo}
                                    onClick={(e) =>
                                        onDeleteUserChecked(e.target.value, e.target.checked)}
                                />
                            </td>
                            <td>{user.employeeName}</td>
                            <td>{user.employeeNo}</td>
                            <td>{user.employeeEmail}</td>
                            <td><select onChange={(e) => handlerSelect(user,e)} value={user.roleNo}>
                                {selectList.map((user) => (
                                <option value={user.roleNo}>{user.roleName}
                                
                                </option>
                                ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <br />
            <div className="button">
                <button type="button" className='button4' onClick={handleOpenModal}>추가</button>
                <button type="button" className='button4'>저장</button>
                <button type="button" className='button4'>취소</button>
                <button type="button" className='button4' onClick={onClickDeleteBtn}>삭제</button>
            </div>
        </div>
    );
}

export default Manager;