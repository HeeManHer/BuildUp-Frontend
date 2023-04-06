import React, { useState, useEffect } from 'react';
import { SetIssueAPI, SaveIssueAPI } from "../../apis/ISSUEAPI";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import "../../css/Issue.css";
import { NavLink } from 'react-router-dom';
import issue from './Issue.json'

function Issue() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setSituation] = useState('');
    const [backlogname, setBacklogname] = useState('');
    const save = () => {
        const saveIssue = {
            title, description, priority, situation, backlogname
        }
        dispatch(SaveIssueAPI(saveIssue));
        setTitle('');
        setDescription('');
        setPriority('');
        setSituation('');
        setBacklogname('');
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredIssue, setHoveredIssue] = useState(null);

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);
    const handleSituationChange = (event) => setSituation(event.target.value);

    const issue = useSelector(state => state.IssueReducer);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(SetIssueAPI());
        },
        []
    );
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // 새로운 이슈 생성 로직
        console.log('새로운 이슈가 생성되었습니다.');
        closeModal();
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        // 이슈 수정 로직
        console.log('이슈가 수정되었습니다.');
        closeModal();
    }

    const handleIssueHover = (event, issue) => {
        setHoveredIssue(issue);
    }

    return (
        <>
            <h1 className="head1">이슈
                <button className="createissue" onClick={openModal}>이슈 생성</button>
            </h1>
            <div className="container1">
                <div className="issuelist">
                    {/* 왼쪽 목록을 볼 수 있는 영역 */}
                    <header>이슈</header>
                    <ul>
                        <br />
                        {issue.map(issue => (

                            <li onMouseEnter={(e) => handleIssueHover(e, issue.title)}><a href="#" onClick={openModal}>{issue.title}</a></li>
                        ))}

                    </ul>
                </div>
                <div className="issuemain">
                    {/* 오른쪽 메인 영역 */}
                    <header>{hoveredIssue ? hoveredIssue : 'Issue 목록'}</header>
                    <p>Issue 내용</p>
                </div>
                <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                    <h2>이슈 관리</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            제목:
                            <input type="text" value={title} onChange={handleTitleChange} />
                        </label>
                        <br />
                        <label>
                            설명:
                            <textarea value={description} onChange={handleDescriptionChange} />
                        </label>
                        <br />
                        <label>
                            우선순위:
                            <select value={priority} onChange={handlePriorityChange}>
                                <option value="High">높음</option>
                                <option value="Middle">보통</option>
                                <option value="Low">낮음</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            백로그 이름:
                            <input type="text" value={backlogname} onChange={handleBacklognameChange} />
                        </label>
                        <br />
                        <label>
                            상황:
                            <input type="text" value={situation} onChange={handleSituationChange} />
                        </label>
                        <br />
                        <button type="submit" onClick={save}>생성</button>
                        <button onClick={closeModal}>닫기</button>
                    </form>
                </Modal>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>이슈 생성</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        제목:
                        <input type="text" value={title} onChange={handleTitleChange} />
                    </label>
                    <br />
                    <label>
                        설명:
                        <textarea value={description} onChange={handleDescriptionChange} />
                    </label>
                    <br />
                    <label>
                        우선순위:
                        <select value={priority} onChange={handlePriorityChange}>
                            <option value="High">높음</option>
                            <option value="Middle">보통</option>
                            <option value="Low">낮음</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        백로그 이름:
                        <input type="text" value={backlogname} onChange={handleBacklognameChange} />
                    </label>
                    <br />
                    <label>
                        상황:
                        <input type="text" value={situation} onChange={handleSituationChange} />
                    </label>
                    <br />
                    <button type="submit" onClick={save}>생성</button>
                    <button onClick={closeModal}>닫기</button>
                </form>
            </Modal>
        </>
    );
}

export default Issue;