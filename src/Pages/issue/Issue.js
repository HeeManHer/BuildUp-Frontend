import React, { useState, useEffect } from 'react';
import { SetIssueAPI, SaveIssueAPI, UpdateIssueAPI, DeleteIssueAPI, GetBacklogListAPI, SearchIssueAPI } from "../../apis/ISSUEAPI";
import { EmployeebtnAPI } from "../../apis/EmployeebtnAPI.js"
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import "../../css/Issue.css";
import { NavLink, useParams } from 'react-router-dom';
import Wan from '../comment/Wan';
import { decodeJwt } from '../../utils/tokenUtils';
import 로그인창 from '../../img/로그인창.png';


function Issue() {
    const { projectNo } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setSituation] = useState('');
    const [backlogname, setBacklogname] = useState('');
    const [searchValue, setsearchValue] = useState('');

    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [hoveredIssue, setHoveredIssue] = useState(null);
    const [oneissue, setoneissue] = useState({ projectNo });
    const [showModal, setShowModal] = useState(false);
    const IssueReducer = useSelector(state => state.IssueReducer);
    const backlogList = useSelector(state => state.BacklogReducer.data);

    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    const currentIssues = IssueReducer.data;
    const PageInfo = IssueReducer.pageInfo;

    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const authorityReducer = useSelector(state => state.employeebtnReducer);
    const auth = authorityReducer.map(auth => {
        if (auth.typeNo == 3) return auth.authorityState
    })
    const dispatch = useDispatch();
    const save = () => {
        const saveIssue = {
            issueName: title, issueContent: description, issuePriority: priority, issueStatus: situation, backlogNo: backlogname, projectNo
        };

        const token = decodeJwt(window.localStorage.getItem("accessToken"));



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

    };



    const deleted = (oneissue) => {
        dispatch(DeleteIssueAPI(oneissue));
    }

    const search = () => {
        dispatch(SearchIssueAPI(searchValue, projectNo));
    }



    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);
    const handleSituationChange = (event) => setSituation(event.target.value);

    const pageNumber = [];
    if (PageInfo) {
        for (let i = PageInfo.startPage; i <= PageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(SetIssueAPI(projectNo, currentPage, searchValue));
        },
        [currentPage]
    );

    // 다음 페이지로 이동
    const nextPage = () => {
        if (currentPage + 1 <= PageInfo.endPage) {
            setCurrentPage(currentPage + 1);
        } else {
            doublenextPage();
        }
    };

    // 10페이지뒤 첫화면
    const doublenextPage = () => {
        const next = Math.min(currentPage + 10, PageInfo.maxPage);
        const nextStart = next - ((next - 1) % 10);
        setCurrentPage(nextStart);

    };



    // 이전 페이지로 이동
    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1);
        } else {
            doubleprevpage();
        }
    };

    // 10페이지뒤 첫화면
    const doubleprevpage = () => {
        const prev = Math.max(currentPage - 10, 1);
        const prevStart = prev - ((prev - 1) % 10 || 10);
        const prevPage = prevStart < 1 ? 1 : prevStart;
        setCurrentPage(prevPage);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // 새로운 이슈 생성 로직
        // console.log('새로운 이슈가 생성되었습니다.');
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        // 이슈 수정 로직
        // console.log('이슈가 수정되었습니다.');
    }



    const handleIssueHover = (event, issue) => {
        setHoveredIssue(issue);
    }

    return (

        <>
            <div className="newproject">
                <h1>이슈</h1>

                {auth.indexOf('C') >= 0 && (
                    <button className="btn btn-outline-primary" style={{ position: 'sticky', right: '10px', top: '100px', width: "200px" }} onClick={() => { setIsModal1(true); dispatch(GetBacklogListAPI(projectNo)) }}>이슈 생성</button>
                )}
            </div>


            <hr className="line" />
            <form>
                <div className="input-group" style={{ position: 'sticky', top: '225px', left: '1290px', width: "400px" }}>
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2"
                        value={searchValue}
                        onChange={e => setsearchValue(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                search();
                            }
                        }}
                    />

                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={search}>
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
            <br />
            <div className="container1">
                <table className="table table-striped table-hover" width="90%">
                    <thead>
                        <tr>
                            {/* <th>이슈번호</th> */}
                            <th>제목</th>
                            <th>내용</th>
                            <th>상태</th>
                            <th>우선순위</th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentIssues.map((issue, index) => (
                            <tr key={index}>
                                {/* <td>{issue.issueNo}</td> */}
                                <td >{issue.issueName.length > 10 ? issue.issueName.substring(0, 10) + "..." : issue.issueName}</td>
                                {/* <td >{issue.issueContent}</td> */}
                                <td >{issue.issueContent.length > 10 ? issue.issueContent.substring(0, 10) + "..." : issue.issueContent}</td>
                                <td >{issue.issuePriority}</td>
                                <td >{issue.issueStatus}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={() => { setIsModal2(true); setoneissue(issue); dispatch(GetBacklogListAPI(projectNo)) }}>
                                        조회
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pageset">
                    <div className="pagebutton">
                        <span style={{ marginLeft: ' 10px', padding: "5px" }}> <button className="btn btn-outline-primary" onClick={doubleprevpage}> ◀◀ </button></span>
                        <span > <button className='button2' class="btn btn-outline-primary" onClick={prevPage}> ◀ </button></span>
                        {pageNumber.map((num) => (
                            <li className="pagenum" style={{ marginLeft: ' 10px', padding: "5px" }} key={num} onClick={() => setCurrentPage(num)}>
                                <span style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}>
                                    {num}
                                </span>
                            </li>
                        ))}
                        <span style={{ marginLeft: ' 10px', padding: "0px" }}><button className="btn btn-outline-primary" onClick={nextPage}>▶</button></span>
                        <span><button className='button2' class="btn btn-outline-primary" onClick={doublenextPage}>▶▶</button></span>
                    </div>

                </div>

            </div >

            <Modal className="modalcreate" isOpen={isModal1} onRequestClose={() => { setIsModal1(false) }}>
                <h6 className="smalltitle">이슈</h6>
                <hr className="line3" />
                <h3 className="smalltitle2">이슈 생성</h3>

                <form onSubmit={handleSubmit}>
                    <label>
                        제목 : <input type="text" value={title} onChange={handleTitleChange} name="title" style={{ width: '450px' }} /></label>
                    <br />
                    <br />
                    <label>
                        설명 : </label>
                    <textarea className="descriptiontext" value={description} onChange={handleDescriptionChange} />
                    <br />
                    <br />
                    <label>
                        우선순위 : <select value={priority} onChange={handlePriorityChange}>
                            <option value="">선택</option>
                            <option value="긴급">긴급</option>
                            <option value="보통">보통</option>
                            <option value="보류">보류</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>
                        백로그 이름 : <select value={backlogname} onChange={handleBacklognameChange} >
                            {backlogList.map(backlog => {
                                // console.log(backlog);
                                return <option key={backlog.backlogNo} value={backlog.backlogNo}>{backlog.backlogName}</option>;
                            }
                            )}
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>
                        상태 : <select value={situation} onChange={handleSituationChange}>
                            <option value="">선택</option>
                            <option value="예정">예정</option>
                            <option value="진행중">진행중</option>
                            <option value="완료">완료</option>
                        </select>
                    </label>
                    <br />
                </form>
                <button type="submit" className="btn btn-outline-primary" onClick={() => {
                    save();
                    window.location.reload();
                }}>생성</button>

                <button type="button" className="btn btn-outline-danger" style={{ marginLeft: "20px" }} onClick={() => { setIsModal1(false) }}>닫기</button>
            </Modal>


            <Modal className="modalsub" isOpen={isModal2} onRequestClose={() => { setIsModal2(false) }}>
                <h6 className="smalltitle">이슈</h6>
                <hr className="line3" />
                <h3 className="smalltitle2">이슈 수정</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        제목 : <input type="text" value={oneissue.issueName} onChange={e => setoneissue({ ...oneissue, issueName: e.target.value })} name="title"
                            style={{ width: '450px' }}
                        />
                    </label>
                    <br />
                    <label>
                        설명 : </label>
                    <textarea className="descriptiontext" value={oneissue.issueContent} onChange={e => setoneissue({ ...oneissue, issueContent: e.target.value })} />
                    <br />
                    <label>
                        우선순위 : &nbsp;
                        <select value={oneissue.issuePriority} onChange={e => setoneissue({ ...oneissue, issuePriority: e.target.value })}>
                            <option value="">선택</option>
                            <option value="긴급">긴급</option>
                            <option value="보통">보통</option>
                            <option value="보류">보류</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        백로그 이름 : <select value={oneissue.backlogNo} onChange={e => setoneissue({ ...oneissue, backlogNo: e.target.value })} >
                            {backlogList.map(backlog =>
                                <option key={backlog.backlogNo} value={backlog.backlogNo}>{backlog.backlogName}</option>
                            )}
                        </select>
                    </label>
                    <br />
                    <label>
                        상태 : <select value={oneissue.issueStatus} onChange={e => setoneissue({ ...oneissue, issueStatus: e.target.value })} >
                            <option value="">선택</option>
                            <option value="예정">예정</option>
                            <option value="진행중">진행중</option>
                            <option value="완료">완료</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    {/* 이부분이 댓글기능에 이슈번호를 불러오는 부분 */}
                    {/* 만약 이부분 없으면 CommentAPI.js에 getComment 부분이 안된다. */}
                    <Wan issueNo={oneissue.issueNo} />
                    {auth.indexOf('U') >= 0 && (
                        <button type="submit" className="btn btn-outline-primary" onClick={() => {
                            update(); setIsModal2(false)
                            window.location.reload();

                        }}>수정</button>
                    )}
                    {auth.indexOf('D') >= 0 && (
                        <button className="btn btn-outline-danger" style={{ marginLeft: "20px" }} onClick={() => { setShowModal(true) }}>삭제</button>
                    )}
                    {showModal && (
                        <div className="modalaa">
                            <div className="modal-content">
                                <header className="deletemessage">{oneissue.issueName}을 삭제하시겠습니까?</header>
                                <main></main>
                                <footer>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        deleted(oneissue);
                                        setIsModal2(false);
                                        setShowModal(false); // 모달 2개 모두 닫기
                                        window.location.reload(); // 페이지 새로고침
                                    }}>확인</button>

                                    <button className="btn btn-outline-danger" onClick={() => { setShowModal(false) }}>취소</button>
                                </footer>
                            </div>
                        </div>
                    )}

                </form>
            </Modal>
        </>
    );
}

export default Issue;