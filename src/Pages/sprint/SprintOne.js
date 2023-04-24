import React, { useState, useEffect } from 'react';
import "../../css/sprint.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getSprintDetail, putSprint } from '../../apis/SprintAPI';
import { deleteSprint } from "../../apis/SprintAPI";

function SprintOne() {

const {sprintNo}=useParams();
const { projectNo } = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();


const sprint=useSelector(state=>state.SprintReducer);

useEffect(
    ()=>{
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

    return (
        <>
            <div className="newproject" dispaly="flex" justifyContent="space-between" >
                <h1 onClick={gosprintList}>스프린트/<span id="size">{sprint.sprintName}</span></h1>
                <div display="flex">
                    <button id="sprintDeleteBtn" className="button1" margin-left="auto" onClick={sprintDelete}>스프린트 삭제</button>
                    <button id="sprintEndBtn" className="button1" margin-left="auto" >스프린트 완료</button>
                </div>
            </div>
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {Array.isArray(sprint.boardIssue) &&  sprint.boardIssue.map(board=>
                    <div /*key={index}*/ className="sprintlistboard1">  
                        <div className="sprintlistboard2">
                            <div className="sprintboard">
                                <div className="sprinttboard">
                                    <span style={{ fontWeight: "bold" }}>{board.boardName}</span>
                                </div>
                            </div>
                            <div className="sprintlistline"></div>
                            {Array.isArray(board.sprintIssue)&&
                                board.sprintIssue.map(issue =>
                                    <div style={{ position: 'relative', margin: '10px', padding: '10px', border: '1px solid black' }}>
                                        <span>{issue.issueName}</span>
                                        <br />
                                        <span style={{ fontSize: '9px' }}>담당자 : {issue.employeeName ?issue.employeeName:'없음' }</span>
                                    </div>
                            )}
                        </div>
                    </div>
                )
                }
                <div /*key={index}*/ className="sprintlistboard1">
                    <div className="sprintlistboard2">
                        <div className="sprintboard">
                            <div className="sprinttboard">
                                <span style={{ fontWeight: "bold" }}>보드 추가</span>
                            </div>
                        </div>
                        <div className="sprintlistline"></div>
                        <div className="add-board-button-container">
                            <button className="add-board-button">
                                <span>+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SprintOne;
