import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/project.css";

function InviteMember() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const handleOpenModal = () => {
        setIsModalOpen(true);             //true일떄 생성가능함
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemIndex(-1);         //false면 생성불가능함
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            title,
            main,
            status,
            priority,
        };

        if (selectedItemIndex === -1) {
            setItems([...items, newItem]);
        } else {
            const updatedItems = [...items];
            updatedItems[selectedItemIndex] = newItem;
            setItems(updatedItems);
        }

        setTitle('');
        setMain('');
        setStatus('');
        setPriority('');
        handleCloseModal();
    };

    const handleEditItem = (index) => {
        setSelectedItemIndex(index);
        const selectedItem = items[index];
        setTitle(selectedItem.title);
        setMain(selectedItem.main);
        setStatus(selectedItem.status);
        setPriority(selectedItem.priority);
        handleOpenModal();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

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
                    <div style={{ background: '#fff', padding: 16 }}>
                        <h2>{selectedItemIndex === -1 ? title : title}</h2> {/* change the modal title depending on whether an item is being added or edited */}

                        <form onSubmit={handleSubmit}>

                            <label>
                                제목 :
                                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </label>
                            <br />
                            <label>
                                담당자 :
                                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                                    <option value="">선택</option>
                                    <option value="허희만">허희만</option>
                                    <option value="남효정">남효정</option>
                                    <option value="조평훈">조평훈</option>
                                    <option value="이준성">이준성</option>
                                    <option value="최명건">최명건</option>
                                    <option value="박완규">박완규</option>
                                    <option value="염진호">염진호</option>


                                </select>
                            </label>
                            <br />
                            <label>
                                팀원 초대 :
                                <input type="text" value={priority} onChange={(event) => setPriority(event.target.value)} />
                            </label>
                            <br />
                            <button type="submit">{selectedItemIndex === -1 ? '추가' : 'Save'}</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='newproject'>
                <h1>프로젝트</h1>
                <button className="button1" onClick={handleOpenModal}>프로젝트 생성</button>

            </div>
            <hr className="line" />

            <NavLink to="project/ProjectManager">
                <ul>
                    <div>
                        {items.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.main}</p>
                                {/* <p>담당자 : {item.status}</p>
                <p>팀원 : {item.priority}</p> */}
                            </li>
                        ))}
                    </div>
                    {/* <button onClick={() => handleEditItem(index)}>수정</button>
            <button onClick={() => handleDeleteItem(index)}>삭제</button> */}
                </ul>
            </NavLink>

        </div>
    );
}

export default InviteMember;