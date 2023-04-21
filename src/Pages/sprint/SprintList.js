import SprintCreate from "./SprintCreate";
import React, { useState, useEffect } from 'react';
import "../../css/sprint.css";
import { getSprint, insertSprint, postSprint, deleteSprint, getIssue } from '../../apis/SprintAPI.js';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SprintList() {
    const { projectNo } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [onesprint, setonesprint] = useState({});
    const sprintReducer = useSelector(state => state.SprintReducer);
    const sprintList = sprintReducer.data;
    const pageinfo = sprintReducer.pageInfo;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSprint(projectNo));
    }, []);

    // const update = () => {
    //     dispatch(postSprint(onesprint));
    // };

    // const deleted = () => {
    //     dispatch(deleteSprint(onesprint));
    // }
    // console.log(issueList)

    // const nextpage = () => {
    //     setCurrentPage(currentPage + 1);
    // }

    // const prevpage = () => {
    //     setCurrentPage(currentPage - 1);
    // }

    const openSprintCreateModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        
        <>
            <div className="newproject">
                <h1>스프린트 목록</h1>
                <button id="sprintCreateBtn" className="button1" onClick={openSprintCreateModal}>스프린트 생성</button>
            </div>
            <SprintCreate modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {sprintList&&sprintList.map((sprint, index) =>  (

                    <div key={index} className="sprintlistboard1">
                        <div className="sprintlistboard2">
                            <div className="sprintlistboard3">
                                <div className="sprintname">
                                    <span>{sprint.sprintName}</span>
                                </div>
                                <div className="sprintname">
                                    <span>{sprint.sprintState}</span>
                                </div>
                            </div>
                            <span className="sprintdate">
                                {new Intl.DateTimeFormat('kr').format(new Date(sprint.sprintStartday? sprint.sprintStartday:1))}
                                ~
                                {new Intl.DateTimeFormat('kr').format(new Date(sprint.sprintEndday? sprint.sprintEndday:1))}</span>
                            <div className="sprintlistline"></div>
                            {Array.isArray(sprint.sprintIssue)&& sprint.sprintIssue &&sprint.sprintIssue.map(issue => 
                                    <div className="sprintlistissue">
                                    <span>{issue.issueName}</span>
                                    <br />
                                    <span style={{}}>담당자 : {issue.employeeName}</span>
                                </div> 
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SprintList;