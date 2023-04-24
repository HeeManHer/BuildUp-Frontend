import React, { useState, useEffect } from 'react';
import "../../css/sprint.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SetIssueAPI, SaveIssueAPI, UpdateIssueAPI, DeleteIssueAPI, GetBacklogListAPI, SearchIssueAPI } from "../../apis/ISSUEAPI";
import { EmployeebtnAPI } from "../../apis/EmployeebtnAPI.js"
import { useNavigate, useParams } from 'react-router-dom';
import { getSprintDetail, putSprint } from '../../apis/SprintAPI';
import { deleteSprint } from "../../apis/SprintAPI";
import { decodeJwt } from '../../utils/tokenUtils';
import Modal from 'react-modal';
import Wan from '../comment/Wan';


function SprintOne() {

    const { sprintNo } = useParams();
    const { projectNo } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setSituation] = useState('');
    const [backlogname, setBacklogname] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [oneIssue, setOneIssue] = useState({ projectNo });
    const [showModal, setShowModal] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');


    const sprint = useSelector(state => state.SprintReducer);
    const backlogList = useSelector(state => state.BacklogReducer.data);
    const authorityReducer = useSelector(state => state.employeebtnReducer);
    const issueReducer = useSelector(state => state.IssueReducer.data);

    useEffect(
        () => {
            setOneIssue(issueReducer[0]);
        },
        [issueReducer]
    )

    useEffect(() => {
        // Local Storage에서 값 가져오기
        const storedValue = localStorage.getItem('textareaValue');
        if (storedValue) {
            setTextareaValue(storedValue);
        }
    }, []);

    // Local Storage에 값 저장하기
    useEffect(() => {
        localStorage.setItem('textareaValue', textareaValue);
    }, [textareaValue]);

    const auth = authorityReducer.map(auth => {
        if (auth.typeNo == 3) return auth.authorityState
    })


    const update = () => {
        dispatch(UpdateIssueAPI(oneIssue));

    };
    const deleted = (oneissue) => {
        dispatch(DeleteIssueAPI(oneIssue));
    }


    useEffect(
        () => {
            dispatch(getSprintDetail(sprintNo));
        },
        []
    )
    console.log(sprint);
    
    const sprintDelete = () => {
        deleteSprint(sprintNo);
        navigate("../")
    }

    const gosprintList = () => {
        navigate("../")
    }

    const sprintClear = () => {
        putSprint(sprintNo);
        navigate("../")
        window.location.reload();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // 새로운 이슈 생성 로직
        console.log('새로운 이슈가 생성되었습니다.');
    }
    console.log(oneIssue)

    return (
        <>
            <div className="newproject" dispaly="flex" justifyContent="space-between" >
                <h1 onClick={gosprintList}>스프린트/<span id="size">{sprint.sprintName}</span></h1>
                <div display="flex">
                    <button id="sprintDeleteBtn" className="button1" margin-left="auto" onClick={sprintDelete}>스프린트 삭제</button>
                    <button id="sprintEndBtn" className="button1" margin-left="auto" onClick={sprintClear}>스프린트 완료</button>
                </div>
            </div>
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {Array.isArray(sprint.boardIssue) && sprint.boardIssue.map((board, index) =>
                    <div key={index} className="sprintboardlist">
                        <div className="sprintlistboard2" >
                            <div className="sprintboard">
                                <div className="sprinttboard">
                                    <span style={{ fontWeight: "bold" }}>{board.issueState}</span>
                                </div>
                            </div>
                            <div className="sprintlistline"></div>
                            <div style={{ height: '85%', overflowY: 'auto' }}>
                                {Array.isArray(board.sprintIssue) &&
                                    board.sprintIssue.map(issue =>
                                        <div style={{ position: 'relative', margin: '10px', padding: '10px', border: '1px solid black', color: 'black' }}
                                            onClick={() => { setIsModal2(true); dispatch(SearchIssueAPI(issue.issueNo, projectNo)); dispatch(GetBacklogListAPI(projectNo)) }}>
                                            <span>{issue.issueName}</span>
                                            <br />
                                            <span style={{ fontSize: '9px' }}>담당자 : {issue.employeeName ? issue.employeeName : '없음'}</span>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                )
                }
                <div className="sprintboardlist">
                    <div className="sprintlistboard2">
                        <div className="sprintboard">
                            <div className="sprinttboard">
                                <span style={{ fontWeight: "bold" }}>공지 사항</span>
                            </div>
                        </div>
                        <div className="sprintlistline"></div>
                        <div style={{ padding: '10px' }}>
                            <textarea style={{ resize: 'none', height: '320px', width: '100%' }}
                                value={textareaValue}
                                onChange={(event) => setTextareaValue(event.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div>

            {oneIssue !== undefined ?
                <Modal className="modalsub" isOpen={isModal2} onRequestClose={() => { setIsModal2(false) }}>
                    <h2>이슈 수정</h2>
                    <hr className="line2" />
                    <form onSubmit={handleSubmit}>
                        <label>
                            제목:
                            <input type="text" value={oneIssue.issueName} onChange={e => setOneIssue({ ...oneIssue, issueName: e.target.value })} name="title" />
                        </label>
                        <br />
                        <label>
                            설명:
                        </label>
                        <textarea className="descriptiontext" value={oneIssue.issueContent} onChange={e => setOneIssue({ ...oneIssue, issueContent: e.target.value })} />
                        <br />
                        <label>
                            우선순위:&nbsp;
                            <select value={oneIssue.issuePriority} onChange={e => setOneIssue({ ...oneIssue, issuePriority: e.target.value })}>
                                <option value="">선택</option>
                                <option value="긴급">긴급</option>
                                <option value="보통">보통</option>
                                <option value="낮음">낮음</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            백로그 이름:
                            <select value={oneIssue.backlogNo} onChange={e => setOneIssue({ ...oneIssue, backlogNo: e.target.value })} >
                                {backlogList.map(backlog =>
                                    <option value={backlog.backlogNo}>{backlog.backlogName}</option>
                                )}
                            </select>
                        </label>
                        <br />
                        <label>
                            상태:
                            <select value={oneIssue.issueStatus} onChange={e => setOneIssue({ ...oneIssue, issueStatus: e.target.value })} >
                                <option value="">선택</option>
                                <option value="expected">예정</option>
                                <option value="proceeding">진행중</option>
                                <option value="success">완료</option>
                            </select>
                        </label>
                        <br />
                        {/* 이부분이 댓글기능에 이슈번호를 불러오는 부분 */}
                        {/* 만약 이부분 없으면 CommentAPI.js에 getComment 부분이 안된다. */}
                        <Wan issueNo={oneIssue.issueNo} />
                        {auth.indexOf('U') >= 0 && (
                            <button className="submitbtn" type="submit" onClick={() => {
                                update(); setIsModal2(false)
                                window.location.reload();

                            }}>수정</button>
                        )}
                        {auth.indexOf('D') >= 0 && (
                            <button className="deletebtn" onClick={() => { setShowModal(true) }}>삭제</button>
                        )}
                        {showModal && (
                            <div className="modalaa">
                                <div className="modal-content">
                                    <p className="deletemessage">{oneIssue.issueName}을 삭제하시겠습니까?</p>
                                    <button onClick={() => {
                                        deleted(oneIssue);
                                        setIsModal2(false);
                                        setShowModal(false); // 모달 2개 모두 닫기
                                        window.location.reload(); // 페이지 새로고침
                                    }}>확인</button>

                                    <button onClick={() => { setShowModal(false) }}>취소</button>
                                </div>
                            </div>
                        )}
                        {/* <button onClick={() => { setIsModal2(false); deleted(oneissue) }}>삭제</button> */}
                    </form>
                </Modal>
                : <></>}
        </>
    );
}

export default SprintOne;
