import React, { useState, useEffect } from 'react';
import { SetIssueAPI, SaveIssueAPI, UpdateIssueAPI, DeleteIssueAPI, GetBacklogListAPI, SearchIssueAPI } from "../../apis/ISSUEAPI";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import "../../css/Issue.css";
import { NavLink, useParams } from 'react-router-dom';
import Wan from '../comment/Wan';


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

    console.log(backlogList);
    const dispatch = useDispatch();
    const save = () => {
        const saveIssue = {
            issueName: title, issueContent: description, issuePriority: priority, issueStatus: situation, backlogNo: backlogname, projectNo
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

    };



    const deleted = (oneissue) => {
        dispatch(DeleteIssueAPI(oneissue));
    }

    // const nextpage = () => {
    //     setCurrentPage(currentPage + 1);
    // }

    // const prevpage = () => {
    //     setCurrentPage(currentPage - 1);
    // }

    const search = () => {
        dispatch(SearchIssueAPI(searchValue, projectNo));
    }



    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);
    const handleSituationChange = (event) => setSituation(event.target.value);

    // const handlePageChange = (pageNumber) => {
    //     dispatch(SetIssueAPI(projectNo, pageNumber))
    //     setCurrentPage(pageNumber + 1);
    // };

    const pageNumber = [];
    if (PageInfo) {
        for (let i = PageInfo.startPage; i <= PageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(SetIssueAPI(projectNo, currentPage));
        },
        [currentPage]
    );
    // const nextPage = () => {
    //     if (currentPage + 1 <= PageInfo.maxPage) {
    //         setCurrentPage(currentPage + 5);
    //     }
    // }

    const nextPage = () => {
        const next = Math.min(currentPage + 5, PageInfo.maxPage);
        setCurrentPage(next);
    }

    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(Math.max(currentPage - 5, 1));
        }
    }

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

                <form style={{ position: 'sticky', top: '100px', left: '1000px', width: "400px" }} class="issuesearch">
                    <div class="input-group">

                        {/* <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2" value={searchValue} onChange={e => setsearchValue(e.target.value)} /> */}
                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"
                            value={searchValue}
                            onChange={e => setsearchValue(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    search();
                                }
                            }}
                        />

                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" onClick={search}>
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>

                    </div>
                </form>
                <button className="createissue" onClick={() => { setIsModal1(true); dispatch(GetBacklogListAPI(projectNo)) }}>이슈 생성</button>
            </h1>


            <h2 className="line" />
            <div className="container1">
                <div className="issuelist">

                    {/* 왼쪽 목록을 볼 수 있는 영역 */}
                    <header>이슈</header>
                    <ul>
                        {/* <br /> */}
                        {currentIssues.map(issue => (
                            <li onMouseEnter={(e) => handleIssueHover(e, issue.title)}>
                                <a href="#" onClick={() => { setIsModal2(true); setoneissue(issue); dispatch(GetBacklogListAPI(projectNo)) }}>{issue.issueName}</a>
                            </li>
                        ))}
                        <div className="pageset">

                            {pageNumber.map((num) => (
                                <li className="pagenum" key={num} onClick={() => setCurrentPage(num)}>
                                    <span style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}>
                                        {num}
                                    </span>
                                </li>
                            ))}

                        </div>
                    </ul>
                    <div className="pagebtn">
                        <button className="prevbtn-text" onClick={prevPage}>
                            &lt;
                        </button>
                        <button className="nextbtn-text" onClick={nextPage}>
                            &gt;
                        </button>
                    </div>
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
                            <select value={backlogname} onChange={handleBacklognameChange} >
                                {backlogList.map(backlog => {
                                    console.log(backlog);
                                    return <option value={backlog.backlogNo}>{backlog.backlogName}</option>;
                                }
                                )}
                            </select>
                        </label>
                        <br />
                        <label>
                            상태:
                            <select value={situation} onChange={handleSituationChange}>
                                <option value="">선택</option>
                                <option value="예정">예정</option>
                                <option value="진행중">진행중</option>
                                <option value="완료">완료</option>
                            </select>
                        </label>
                        <br />
                    </form>
                    <button className="submit1btn" type="submit" onClick={() => {
                        save();
                        window.location.reload();
                    }}>생성</button>

                    <button className="canclebtn" type="button" onClick={() => { setIsModal1(false) }}>닫기</button>
                </Modal>
            </div>

            <Modal className="modalsub" isOpen={isModal2} onRequestClose={() => { setIsModal2(false) }}>
                <h2>이슈 수정</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        제목:
                        <input type="text" value={oneissue.issueName} onChange={e => setoneissue({ ...oneissue, issueName: e.target.value })} name="title" />
                    </label>
                    <br />
                    <label>
                        설명:
                    </label>
                    <textarea className="descriptiontext" value={oneissue.issueContent} onChange={e => setoneissue({ ...oneissue, issueContent: e.target.value })} />
                    <br />
                    <label>
                        우선순위:&nbsp;
                        <select value={oneissue.issuePriority} onChange={e => setoneissue({ ...oneissue, issuePriority: e.target.value })}>
                            <option value="">선택</option>
                            <option value="긴급">긴급</option>
                            <option value="보통">보통</option>
                            <option value="낮음">낮음</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        백로그 이름:
                        <select value={oneissue.backlogNo} onChange={e => setoneissue({ ...oneissue, backlogNo: e.target.value })} >
                            {backlogList.map(backlog =>
                                <option value={backlog.backlogNo}>{backlog.backlogName}</option>
                            )}
                        </select>
                    </label>
                    <br />
                    <label>
                        상태:
                        <select value={oneissue.issueStatus} onChange={e => setoneissue({ ...oneissue, issueStatus: e.target.value })} >
                            <option value="">선택</option>
                            <option value="expected">예정</option>
                            <option value="proceeding">진행중</option>
                            <option value="success">완료</option>
                        </select>
                    </label>
                    <br />
                    <Wan issueNo={oneissue.issueNo} />
                    <button className="submitbtn" type="submit" onClick={() => {
                        update(); setIsModal2(false)
                        window.location.reload();
                    }}>수정</button>
                    <button className="deletebtn" onClick={() => { setShowModal(true) }}>삭제</button>
                    {showModal && (
                        <div className="modalaa">
                            <div className="modal-content">
                                <p className="deletemessage">{oneissue.issueName}을 삭제하시겠습니까?</p>
                                <button onClick={() => {
                                    deleted(oneissue);
                                    setIsModal2(false);
                                    setShowModal(false); // 모달 2개 모두 닫기
                                    // window.location.reload(); // 페이지 새로고침
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