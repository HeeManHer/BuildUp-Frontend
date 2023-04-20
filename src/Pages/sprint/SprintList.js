import SprintCreate from "./SprintCreate";
import React, { useState, useEffect } from 'react';
import { getSprint, insertSprint, updateSprint, patchSprint, deleteSprint } from '../../apis/SprintAPI.js';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


function SprintList() {

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [state, setState] = useState('');
    // const [startday, setStartday] = useState('');
    // const [endday, setEndday] = useState('');
    // // const [issuename, setBIssuename] = useState('');

    // const [isModal1, setIsModal1] = useState(false);
    // // const [hoveredIssue, setHoveredIssue] = useState(null);
    // const [onesprint, setonesprint] = useState({});
    // const [showModal, setShowModal] = useState(false);
    // // const issueList = useSelector(state => state.SprintReducer);

    // const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    // const [itemsPerPage] = useState(5); // 페이지 당 보여줄 항목 수
    // const [pageCount, setPageCount] = useState(Math.ceil(sprintList.length / itemsPerPage)); // 전체 페이지 수

    // const dispatch = useDispatch();

    // const sprintReducer = useSelector(state => state.SprintReducer);
    // const sprintList=sprintReducer.data;

    // useEffect(() => {
    //     dispatch(getSprint());
    // }, []);

    // const save = () => {
    //     const saveSprint = {
    //         sprintName: title, sprintContent: description, sprintState: state,
    //     };

    //     setTitle('');
    //     setDescription('');
    //     setState('');
    //     setStartday('');
    //     setEndday('');
    //     // setIssuename('');
    //     setIsModal1(false);
    // }

    // const update = () => {
    //     dispatch(UpdateSprintAPI(onesprint));

    // };

    // const deleted = () => {
    //     dispatch(deleteSprint(onesprint));
    // }

    // const nextpage = () => {
    //     setCurrentPage(currentPage + 1);
    // }

    // const prevpage = () => {
    //     setCurrentPage(currentPage - 1);
    // }

    // const handleTitleChange = (event) => setTitle(event.target.value);
    // const handleDescriptionChange = (event) => setDescription(event.target.value);
    // const handleStateChange = (event) => setState(event.target.value);
    // // const handleIssuegnameChange = (event) => setIssuename(event.target.value);
    // const handleStartdayChange = (event) => setStartDate(event.target.value);



    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // useEffect(
    //     () => {
    //         dispatch(getSprint());
    //     },
    //     []
    // );

    // const openSprintCreateModal = () => {
    //     setModalIsOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setModalIsOpen(false);
    // };


    return (
        <>
            <div className="newproject">
                <h1></h1>
                {/* <button id="sprintCreateBtn" class="button1" onClick={openSprintCreateModal}>스프린트 생성</button> */}
            </div>
            {/* <SprintCreate modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} /> */}
            <hr className="line" />
            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                {sprintList.map(sprint=>(

                <div style={{
                    width: '200px',
                    height: '400px',
                    border: '1px solid black',
                    margin: '10px',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    alignItems: 'flex-start',
                    position: 'relative'
                }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid black' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                            <div style={{ border: '1px solid black', padding: '5px' }}>
                                <span>{sprint.sprintName}</span>
                            </div>
                            <div style={{ border: '1px solid black', padding: '5px' }}>
                                <span>{sprint.sprintState}</span>
                            </div>
                        </div>
                        <span style={{ margin: '20px 10px' }}>{sprint.startday}~{sprint.endday}</span>
                        <div style={{ width: '100%', height: '10px', backgroundColor: 'blue' }}></div>
                        <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈1</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 허희만</span>
                        </div>
                        <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈2</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 남효정</span>
                        </div>
                    </div>
                </div>
                ))}
                <div
                    style={{
                        width: "200px",
                        height: "400px",
                        border: "1px solid black",
                        margin: "10px",
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        position: "relative"
                    }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid black' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button id="sprintPlus" style={{
                                    fontSize: "24px", width: "50px", height: "50px",
                                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
                                }}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default SprintList;
