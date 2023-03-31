import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/project.css";

/* 이름, 사번, 이메일, 권한 팝업창 const 생성 */
function ProjectManager() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [authority, setAuthority] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemIndex(-1);
    };
    /*이름, 사번, 이메일, 권한 팝업창에 입력 */
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name,
            number,
            email,
            authority,
        };

        if (selectedItemIndex === -1) {
            setItems([...items, newItem]);
        } else {
            const updatedItems = [...items];
            updatedItems[selectedItemIndex] = newItem;
            setItems(updatedItems);
        }
        /*이름, 사번, 이메일, 권한 팝업창에 저장 */
        setName('');
        setNumber('');
        setEmail('');
        setAuthority('');
        handleCloseModal();
    };

    const handleEditItem = (index) => {
        setSelectedItemIndex(index);
        const selectedItem = items[index];
        setName(selectedItem.name);
        setNumber(selectedItem.number);
        setEmail(selectedItem.email);
        setAuthority(selectedItem.authority);
        handleOpenModal();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <>
            <div className="newproject">
                <h1>프로젝트 관리/<span id="size">희만은 우리의 희망</span></h1>
                <button className="button1">프로젝트 삭제</button>
            </div>
            <hr className="line" />

            <div className="projectname">
                <h6>프로젝트 명</h6><h6 id="name">희만은 우리의 희망</h6>
            </div>
            <br />

            <div>
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
                        <div style={{ background: '#fff', padding: 16 }}>
                            <h2>{selectedItemIndex === -1 ? '프로젝트 생성' : '프로젝트 수정'}</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    이름 :
                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                                </label>
                                <br />
                                <label>
                                    사번 :
                                    <input type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
                                </label>
                                <br />
                                <label>
                                    이메일 :
                                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </label>
                                <br />
                                <label>
                                    권한 :
                                    <select value={authority} onChange={(event) => setAuthority(event.target.value)}>
                                        <option value="">선택</option>
                                        <option value="PM">PM</option>
                                        <option value="팀원">팀원</option>
                                    </select>
                                </label>
                                <br />
                                <br />
                                <br />
                                <button type="submit">{selectedItemIndex === -1 ? '추가' : '수정'}</button>
                                <button type="button" onClick={handleCloseModal}>취소</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="projectlist">
                    <table>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>사번</th>
                                <th>이메일</th>
                                <th>권한</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.number}</td>
                                    <td>{item.email}</td>
                                    <td>{item.authority}</td>
                                    <td>
                                        <button type="button" onClick={() => handleEditItem(index)}>수정</button>
                                        <button type="button" onClick={() => handleDeleteItem(index)}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br/>
                <br/>
                <br/>
                    <button className="button2" onClick={handleOpenModal}>추가</button>
            </div>
        </>
    );
}

export default ProjectManager;