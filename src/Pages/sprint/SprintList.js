import React, { useState } from 'react';
import SprintCreate from "./SprintCreate";

function SprintList() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                <button id="sprintcreatebtn" onClick={openSprintCreateModal}>스프린트 생성</button>
                <SprintCreate modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
            </div>
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                                <span>스프린트1</span>
                            </div>
                            <div style={{ border: '1px solid black', padding: '5px' }}>
                                <span>완료</span>
                            </div>
                        </div>
                        <span style={{ margin: '20px 10px', borderBottom: '8px solid blue', paddingBottom: '1px' }}>2023.02.01~2023.02.15</span>
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
                                <span>스프린트2</span>
                            </div>
                            <div style={{ border: '1px solid black', padding: '5px' }}>
                                <span>완료</span>
                            </div>
                        </div>
                        <span style={{ margin: '10px', borderBottom: '8px solid blue', paddingBottom: '1px' }}>2023.02.15~2023.03.01</span>
                        <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈3</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 이준성</span>
                        </div>
                        <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈4</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 허희만</span>
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    );
}

export default SprintList;
