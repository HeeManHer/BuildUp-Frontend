import React, { useState, useEffect } from 'react';
import { SetIssueAPI, SaveIssueAPI, UpdateIssueAPI, DeleteIssueAPI } from "../../apis/ISSUEAPI";

import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import "../../css/Issue.css";
import { NavLink } from 'react-router-dom';
import issue from './Issue.json'
import Wan from '../comment/Wan';

function Issue() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setSituation] = useState('');
    const [backlogname, setBacklogname] = useState('');

    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [hoveredIssue, setHoveredIssue] = useState(null);
    const [oneissue, setoneissue] = useState({});
    const [showModal, setShowModal] = useState(false);

    const issueList = useSelector(state => state.IssueReducer);

    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    const [itemsPerPage] = useState(10); // 페이지 당 보여줄 항목 수
    const [pageCount, setPageCount] = useState(Math.ceil(issueList.length / itemsPerPage)); // 전체 페이지 수
    const dispatch = useDispatch();
    const save = () => {
        const saveIssue = {
            title, description, priority, situation, backlogname
        };

        dispatch(SaveIssueAPI(saveIssue));
        setTitle('');
        setDescription('');
        setPriority('');
        setSituation('');
        setBacklogname('');
        setIsModal1(false);
    }

    const update = () => {
        dispatch(UpdateIssueAPI(oneissue));
    }

    const deleted = () => {
        dispatch(DeleteIssueAPI(oneissue));
    }

    const nextpage = () => {
        setCurrentPage(currentPage + 1);
    }

    const prevpage = () => {
        setCurrentPage(currentPage - 1);
    }


    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);
    const handleSituationChange = (event) => setSituation(event.target.value);


    useEffect(
        () => {
            dispatch(SetIssueAPI());
        },
        []
    );


    const handleSubmit = (event) => {
        event.preventDefault();
        // 새로운 이슈 생성 로직
        console.log('새로운 이슈가 생성되었습니다.');
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        // 이슈 수정 로직
        console.log('이슈가 수정되었습니다.');
    }

    const handleIssueHover = (event, issue) => {
        setHoveredIssue(issue);
    }

    return (
        <>
            <h1 className="head1">이슈
                <button className="createissue" onClick={() => { setIsModal1(true) }}>이슈 생성</button>
            </h1>
            <div className="container1">
                <div className="issuelist">
                    {/* 왼쪽 목록을 볼 수 있는 영역 */}
                    <header>이슈</header>
                    <ul>
                        <br />
                        {issueList.map(issue => (
                            (issueList.indexOf(issue) >= 5 * (currentPage - 1) && issueList.indexOf(issue) < 5 * currentPage) &&  /* < 10 &&*/
                            <li onMouseEnter={(e) => handleIssueHover(e, issue.title)}><a href="#" onClick={() => { setIsModal2(true); setoneissue(issue); }}>{issue.title}</a></li>
                        ))}
                        <div className="pagebtn">

                            <button className="pagenext" onClick={nextpage}></button>
                            <h1>{currentPage}</h1>
                            <button className="pageprev" onClick={prevpage}></button>
                        </div>
                    </ul>
                </div>
                <div className="issuemain">
                    {/* 오른쪽 메인 영역 */}
                    <header>{hoveredIssue ? hoveredIssue : 'Issue 목록'}</header>
                    <p>Issue 내용</p>
                </div>

                <Modal className="modalcreate" isOpen={isModal1} onRequestClose={() => { setIsModal1(false) }}>
                    <h2>이슈 생성</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            제목:
                        </label>
                        <input type="text" value={title} onChange={handleTitleChange} name="title" />
                        <br />
                        <label>
                            설명:
                        </label>
                        <textarea className="descriptiontext" value={description} onChange={handleDescriptionChange} />
                        <br />
                        <label>
                            우선순위:
                            <select value={priority} onChange={handlePriorityChange}>
                                <option value="">선택</option>
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
                            상태:
                            <select value={situation} onChange={handleSituationChange}>
                                <option value="">선택</option>
                                <option value="expected">예정</option>
                                <option value="proceeding">진행중</option>
                                <option value="success">완료</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit" onClick={save}>생성</button>
                        <button onClick={() => { setIsModal1(false) }}>닫기</button>
                    </form>
                </Modal>
            </div>

            <Modal className="modalsub" isOpen={isModal2} onRequestClose={() => { setIsModal2(false) }}>
                <h2>이슈 생성</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        제목:
                        <input type="text" value={oneissue.title} onChange={e => setoneissue({ ...oneissue, title: e.target.value })} name="title" />
                    </label>
                    <br />
                    <label>
                        설명:
                    </label>
                    <textarea className="descriptiontext" value={oneissue.description} onChange={e => setoneissue({ ...oneissue, description: e.target.value })} />
                    <br />
                    <label>
                        우선순위:
                        <select value={oneissue.priority} onChange={e => setoneissue({ ...oneissue, priority: e.target.value })}>
                            <option value="">선택</option>
                            <option value="High">높음</option>
                            <option value="Middle">보통</option>
                            <option value="Low">낮음</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        백로그 이름:
                        <input type="text" value={oneissue.backlogname} onChange={e => setoneissue({ ...oneissue, backlogname: e.target.value })} />
                    </label>
                    <br />
                    <label>
                        상태:
                        <select value={oneissue.situation} onChange={e => setoneissue({ ...oneissue, situation: e.target.value })} >
                            <option value="">선택</option>
                            <option value="expected">예정</option>
                            <option value="proceeding">진행중</option>
                            <option value="success">완료</option>
                        </select>
                    </label>
                    <br />
                    <Wan />
                    <button type="submit" onClick={() => { update(); setIsModal2(false) }}>수정</button>
                    <button onClick={() => { setShowModal(true) }}>삭제</button>
                    {showModal && (
                        <div className="modalaa">
                            <div className="modal-content">
                                <p className="deletemessage">정말로 삭제하시겠습니까?</p>
                                <button onClick={() => {
                                    deleted(oneissue);
                                    setIsModal2(false);
                                    setShowModal(false); // 모달 2개 모두 닫기
                                }}>확인</button>

                                <button onClick={() => { setShowModal(false) }}>취소</button>
                            </div>
                        </div>
                    )}
                    {/* <button onClick={() => { setIsModal2(false); deleted(oneissue) }}>삭제</button> */}
                </form>
            </Modal>
        </>
    );
}

export default Issue;