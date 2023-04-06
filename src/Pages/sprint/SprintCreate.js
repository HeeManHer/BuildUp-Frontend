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
                        width: "calc(80% - 120px)", height: "100px", display: "inline-block",
                        verticalAlign: "top", marginBottom: "-20px"
                    }} />
                    <br />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <label style={{ marginRight: "10px", textAlign: "right" }}>
                            이슈 목록 :
                        </label>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black", width: "25%" }}>이슈 번호</th>
                                    <th style={{ border: "1px solid black", width: "25%" }}>제목</th>
                                    <th style={{ border: "1px solid black", width: "25%" }}>작성자</th>
                                    <th style={{ border: "1px solid black", width: "25%" }}>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>1</td>
                                    <td style={{ border: "1px solid black" }}>이슈 제목 1</td>
                                    <td style={{ border: "1px solid black" }}>작성자 1</td>
                                    <td style={{ border: "1px solid black" }}>완료</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>2</td>
                                    <td style={{ border: "1px solid black" }}>이슈 제목 2</td>
                                    <td style={{ border: "1px solid black" }}>작성자 2</td>
                                    <td style={{ border: "1px solid black" }}>진행 중</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>3</td>
                                    <td style={{ border: "1px solid black" }}>이슈 제목 3</td>
                                    <td style={{ border: "1px solid black" }}>작성자 3</td>
                                    <td style={{ border: "1px solid black" }}>진행 중</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>4</td>
                                    <td style={{ border: "1px solid black" }}>이슈 제목 4</td>
                                    <td style={{ border: "1px solid black" }}>작성자 4</td>
                                    <td style={{ border: "1px solid black" }}>완료</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <button onClick={handleCloseModal}> 시작 </button>
                    <button onClick={handleCloseModal}> 취소 </button>
                </div>
            </Modal>
        </div>
    );
}

export default SprintCreate;