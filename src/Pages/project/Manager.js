import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userList from './User.json';
import "../../css/project.css";

import { getUserList, setUserList, changeUserList, deleteUserList } from '../../apis/UserListAPI';
import { setAuthorityList } from '../../apis/AuthorityListAPI';

function Manager() {

    const [deleteUser, setDeleteUser] = useState([]);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [manager, setManager] = useState('');
    const [inviteText, setInviteText] = useState('');
    const [inviteList, setInviteList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const handleInviteTextChange = (event) => {
        setInviteText(event.target.value);
    };

    const handleInviteAdd = (e) => {
        e.preventDefault();
        setInviteList([...inviteList, inviteText]);
        setInviteText("");
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);             //true일때 생성가능함
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemIndex(-1);         //false면 생성불가능함
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            title,
            manager,
            inviteText,
        };

        if (title && manager) { // 값이 모두 채워져 있는 경우에만 생성 가능
            if (selectedItemIndex === -1) {
                setItems([...items, newItem]);
            } else {
                const updatedItems = [...items];
                updatedItems[selectedItemIndex] = newItem;
                setItems(updatedItems);
            }
            setTitle('');
            setManager('');
            setInviteText('');
            setInviteList([]);
            handleCloseModal();
        }
    };

    const handleInviteRemove = (index) => {
        setInviteList(inviteList.filter(invite => inviteList.indexOf(invite) !== index));
    };

    const authorityList = useSelector(state => state.authorityReducer);
    const userList = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (userList.length == 0) {
                dispatch(setUserList());
            } else {
                dispatch(getUserList());
            }
            dispatch(setAuthorityList());
        },
        []
    );

    const onChangeAuthority = (user, value) => {

        user = {
            ...user,
            authority: value
        };

        dispatch(changeUserList(user));
    }

    const onDeleteUserChecked = (userNo, isChecked) => {
        if (isChecked) {
            setDeleteUser([...deleteUser, userNo]);
        } else {
            setDeleteUser(deleteUser.filter(user => user !== userNo));
        }
    };

    const onClickDeleteBtn = () => {

        dispatch(deleteUserList(deleteUser));
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
                                제목 : 희만은 우리의 희망
                            </label>
                            <br />
                            <br />
                            <label className="manager">
                                담당자 : 허희만
                            </label>
                            <br />
                            <br />
                            <div>
                                <div className="invite">
                                    <label>
                                        팀원 초대 :
                                        <input
                                            type="text"
                                            value={inviteText}
                                            onChange={(e) => setInviteText(e.target.value)}
                                            style={{ width: "395px" }}
                                        />
                                        <button type="button" onClick={handleInviteAdd}>
                                            추가
                                        </button>
                                    </label>
                                    <div className="row" style={{ overflow: "auto", height: "150px" }}>
                                        {inviteList.map((invite, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    border: "1px solid black",
                                                    padding: "5px",
                                                    margin: "5px",
                                                    display: "flex",
                                                    height: "40px",
                                                }}
                                            >
                                                <div>{invite}</div>
                                                <button
                                                    type="button"
                                                    style={{ marginLeft: "20px" }}
                                                    onClick={() => {
                                                        setInviteList(inviteList.filter((_, i) => i !== index));
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <br />

                            </div>
                            <button className='button2' type="submit" >{selectedItemIndex === -1 ? '추가' : 'Save'}</button>
                            <button className="button3" type="button" onClick={() => handleCloseModal()}>{selectedItemIndex === -1 ? "취소" : "Cancel"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="newproject">
                <h1>프로젝트 관리/<span id="size">희만은 우리의 희망</span></h1>
                <button className="button1">프로젝트 삭제</button>
            </div>
            <hr className="line" />

            <div className="projectname">
                <h3>프로젝트 명 : </h3>
                <br />
                <h6 id="name">희만은 우리의 희망</h6>
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
                {/* <tbody>
                    {userList.map(user =>
                        <tr key={user.no}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="delete"
                                    id={user.no}
                                    value={user.no}
                                    onClick={e => onDeleteUserChecked(e.target.value, e.target.checked)}
                                />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.no}</td>
                            <td>{user.email}</td>
                            <td>
                                <select name="authority" value={user.authority} onChange={(e) => onChangeAuthority(user, e.target.value)}>
                                    {authorityList.map(authority => (
                                        <option key={authority.no} value={authority.name}>{authority.name}</option>
                                    ))}
                                </select>

                            </td>
                        </tr>
                    )}
                </tbody> */}
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.no}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="delete"
                                    id={user.no}
                                    value={user.no}
                                    onClick={(e) =>
                                        onDeleteUserChecked(e.target.value, e.target.checked)
                                    }
                                />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.no}</td>
                            <td>{user.email}</td>
                            <td>
                                <select
                                    name="authority"
                                    value={user.authority}
                                    onChange={(e) => onChangeAuthority(user, e.target.value)}
                                >
                                    {authorityList.map((authority) => (
                                        <option key={authority.no} value={authority.name}>
                                            {authority.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                    ))}
                    {inviteList.map((invite, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="delete"
                                    id={invite.no}
                                    value={invite.no}
                                    onClick={(e) =>
                                        onDeleteUserChecked(e.target.value, e.target.checked)
                                    }></input>
                                    </td>
                            <td>{invite}</td>

                            <td>{ }</td>
                            <td>{ }</td>

                            <td>
                                <select name="authority"
                                    value={invite.authority}
                                    onChange={(e) => onChangeAuthority(invite, e.target.value)}>

                                    <option value="팀원">팀원</option>
                                    <option value="PM">PM</option>
                                    <option value="부사수">부사수</option>
                                    <option value="사수">사수</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <br />
            <div className='button'>

                <button type="button" className='btn btn-primary' onClick={handleOpenModal} >추가</button>

                <button type="button" className='btn btn-success' >저장</button>
                <button type="button" className='btn btn-warning' >취소</button>
                <button type="button" className='btn btn-danger' onClick={onClickDeleteBtn}>삭제</button>
            </div>
        </div>

    );
}

export default Manager;