import SprintCreate from "./SprintCreate";
import React, { useState, useEffect } from 'react';
import "../../css/sprint.css";
import { getSprint, insertSprint, postSprint, deleteSprint, getIssue } from '../../apis/SprintAPI.js';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function SprintList() {
    const { projectNo } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [onesprint, setonesprint] = useState({});
    const sprintReducer = useSelector(state => state.SprintReducer);
    const sprintList = sprintReducer.data;
    const pageInfo = sprintReducer.pageInfo;
    const [currentPage, setCurrentPage] = useState(1);

    const authorityReducer = useSelector(state => state.employeebtnReducer);
    const auth = authorityReducer.map(auth => {
        if (auth.typeNo == 3) return auth.authorityState
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSprint(projectNo, currentPage));
    }, [currentPage]);

    const pageNumber = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }

    const nextpage = () => {
        if (currentPage + 1 <= pageInfo.maxPage) {
            setCurrentPage(currentPage + 1)
        }
    };

    const doublenextpage = () => {
        const next = Math.min(currentPage + 10, pageInfo.maxPage);
        setCurrentPage(next);
    }

    const prevpage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const doubleprevpage = () => {
        const prev = Math.max(currentPage - 10, 1);
        setCurrentPage(prev);
    };

    const openSprintCreateModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        Array.isArray(sprintList) &&
        <>
            <div className="newproject" >
                <h1>스프린트 목록</h1>
                {auth.indexOf('C') >= 0 &&
                    <button id="sprintCreateBtn" className="button1" class="btn btn-outline-primary" style={{ position: 'sticky', top: '100px', right: '10px', width: "200px" }} onClick={openSprintCreateModal}>스프린트 생성</button>
                }
            </div>
            <SprintCreate modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {sprintList && sprintList.map((sprint, index) => (
                    <div key={index} className="sprintlistboard1" onClick={() => navigate("./" + sprint.sprintNo)}>
                        <div className="sprintlistboard2"  >
                            <div className="sprintlistboard3" >
                                <div className="sprintname">
                                    <span class="btn btn-outline-primary" >{sprint.sprintName}  </span>
                                </div>
                                <div class="btn btn-outline-primary" className="sprintname">
                                    <span class="btn btn-outline-primary">{sprint.sprintState}</span>
                                </div>
                            </div>
                            <span className="sprintdate">
                                {new Intl.DateTimeFormat('kr').format(new Date(sprint.sprintStartday ? sprint.sprintStartday : 1))}
                                ~
                                {new Intl.DateTimeFormat('kr').format(new Date(sprint.sprintEndday ? sprint.sprintEndday : 1))}</span>
                            <div className="sprintlistline"></div>
                            {Array.isArray(sprint.sprintIssue) && sprint.sprintIssue && sprint.sprintIssue.slice(0, 3).map(issue =>
                                <div className="sprintlistissue" style={{ border: '1px solid cornflowerblue' }}>
                                    <span>{issue.issueName}</span>
                                    <br />
                                    <span style={{}}>담당자 : {issue.employeeName}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className='pagebutton' >
                <span style={{ marginLeft: ' 10px', padding: "5px" }}> <button className="btn btn-outline-primary" onClick={doubleprevpage}> ◀◀ </button></span>
                <span > <button className='button2' class="btn btn-outline-primary" onClick={prevpage}> ◀ </button></span>
                {pageNumber.map((num) => (
                    <li style={{ marginLeft: ' 10px', padding: "5px" }} className='pageno' key={num} onClick={() => setCurrentPage(num)}>
                        <span style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}>
                            {num}
                        </span>
                    </li>
                ))}
                <span style={{ marginLeft: ' 10px', padding: "5px" }}><button className="btn btn-outline-primary" onClick={nextpage}>▶</button></span>
                <span><button className='button2' class="btn btn-outline-primary" onClick={doublenextpage}>▶▶</button></span>
            </div>

        </>
    );
}

export default SprintList;