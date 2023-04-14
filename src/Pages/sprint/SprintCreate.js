import React, { useState } from "react";
import Modal from "react-modal";

function SprintCreate(props) {
    const { modalIsOpen, handleCloseModal } = props;


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="SprintCreate Modal"
                style={{
                    content: {
                        width: "50%",
                        height: "700px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }
                }}
            >
                <div className="modal-header">
                    <h5 className="modal-title" style={{ color: "blue" }}>
                        스프린트
                    </h5>
                </div>
                <div style={{ margin: "20px 0", position: "relative" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <h2>스프린트 생성</h2>
                    </div>
                    <label style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", width: "120px", textAlign: "right" }}>스프린트 이름 : </label>
                    <input type="text" style={{ width: "calc(80% - 120px)", display: "inline-block", verticalAlign: "top" }} />
                    <br />
                    <label style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", width: "120px", textAlign: "right" }}>기간 설정 : </label>
                    <input type="text" style={{ width: "calc(80% - 120px)", display: "inline-block", verticalAlign: "top" }} />
                    <br />
                    <label style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", width: "120px", textAlign: "right" }}>시작 날짜 : </label>
                    <input type="text" style={{ width: "calc(80% - 120px)", display: "inline-block", verticalAlign: "top" }} />
                    <br />
                    <label style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", width: "120px", textAlign: "right" }}>종료 날짜 : </label>
                    <input type="text" style={{ width: "calc(80% - 120px)", display: "inline-block", verticalAlign: "top" }} />
                    <br />
                    <label style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", width: "120px", textAlign: "right" }}>스프린트 내용 : </label>
                    <input type="text" style={{
                        width: "calc(80% - 120px)", height: "80px", display: "inline-block",
                        verticalAlign: "top", marginBottom: "20px"
                    }} />
                    <br />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <label id="issueList" style={{ marginRight: "10px", textAlign: "right" }}>
                            이슈 목록 :
                        </label>
                        <table style={{ border: "1px solid black", width: "100%", height: "40px" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black", width: "5%" }}></th>
                                    <th style={{ border: "1px solid black", width: "17.5%" }}>이슈 이름</th>
                                    <th style={{ border: "1px solid black", width: "57.5%" }}>이슈 내용</th>
                                    <th style={{ border: "1px solid black", width: "10%" }}>담당자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>
                                        <input type="checkbox" />
                                    </td>
                                    <td style={{ border: "1px solid black" }}>이슈 이름</td>
                                    <td style={{ border: "1px solid black" }}>이슈 내용</td>
                                    <td style={{ border: "1px solid black" }}>
                                        <select>
                                            <option value="담당자1">허희만</option>
                                            <option value="담당자2">박완규</option>
                                            <option value="담당자3">조평훈</option>
                                            <option value="담당자4">남효정</option>
                                            <option value="담당자5">이준성</option>
                                            <option value="담당자6">최명건</option>
                                            <option value="담당자7">염진호</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>
                                        <input type="checkbox" />
                                    </td>
                                    <td style={{ border: "1px solid black" }}>이슈 이름</td>
                                    <td style={{ border: "1px solid black" }}>이슈 내용</td>
                                    <td style={{ border: "1px solid black" }}>
                                        <select>
                                            <option value="담당자1">허희만</option>
                                            <option value="담당자2">박완규</option>
                                            <option value="담당자3">조평훈</option>
                                            <option value="담당자4">남효정</option>
                                            <option value="담당자5">이준성</option>
                                            <option value="담당자6">최명건</option>
                                            <option value="담당자7">염진호</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>
                                        <input type="checkbox" />
                                    </td>
                                    <td style={{ border: "1px solid black" }}>이슈 이름</td>
                                    <td style={{ border: "1px solid black" }}>이슈 내용</td>
                                    <td style={{ border: "1px solid black" }}>
                                        <select>
                                            <option value="담당자1">허희만</option>
                                            <option value="담당자2">박완규</option>
                                            <option value="담당자3">조평훈</option>
                                            <option value="담당자4">남효정</option>
                                            <option value="담당자5">이준성</option>
                                            <option value="담당자6">최명건</option>
                                            <option value="담당자7">염진호</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>
                                        <input type="checkbox" />
                                    </td>
                                    <td style={{ border: "1px solid black" }}>이슈 이름</td>
                                    <td style={{ border: "1px solid black" }}>이슈 내용</td>
                                    <td style={{ border: "1px solid black" }}>
                                        <select>
                                            <option value="담당자1">허희만</option>
                                            <option value="담당자2">박완규</option>
                                            <option value="담당자3">조평훈</option>
                                            <option value="담당자4">남효정</option>
                                            <option value="담당자5">이준성</option>
                                            <option value="담당자6">최명건</option>
                                            <option value="담당자7">염진호</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button id="sprintStart" style={{ width: "100px", height: "40px", float: "left" }} >시작</button>
                        <button id="sprintCancel" style={{ width: "100px", height: "40px", float: "right" }} onClick={handleCloseModal}>취소</button>
                    </div>
                </div>
                
            </Modal>
        </div>
    );
}

export default SprintCreate;