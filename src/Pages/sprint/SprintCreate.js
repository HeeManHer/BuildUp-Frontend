import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../../css/sprint.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetIssueAPI } from "../../apis/ISSUEAPI";
import { useParams } from "react-router-dom";
import { setUserList } from "../../apis/UserListAPI";
import { postSprint } from "../../apis/SprintAPI";


function SprintCreate(props) {
    const dispatch = useDispatch();

    const { projectNo } = useParams();

    const { modalIsOpen, handleCloseModal } = props;
    const userList = useSelector(state => state.userReducer);
    const issueReducer = useSelector(state => state.IssueReducer);

    const issueList = issueReducer.data;
    const pageInfo = issueReducer.pageInfo;

    const [onesprint, setonesprint] = useState({ projectNo, sprintIssue: [] });
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(setUserList(projectNo));
        },
        []
    );

    useEffect(
        () => {
            dispatch(SetIssueAPI(projectNo, currentPage));
        },
        [currentPage]
    );



    const sprintInfo = (e) => {
        setonesprint({
            ...onesprint,
            [e.target.name]: e.target.value
        })
    }

    const issueCheck = (e) => {
        if (e.target.checked) {
            setonesprint({
                ...onesprint,
                sprintIssue: [...onesprint.sprintIssue, { [e.target.name]: e.target.value }]
            })
        } else {
            setonesprint({
                ...onesprint,
                sprintIssue: onesprint.sprintIssue.filter(item => item.issueNo !== e.target.value)
            })
        }
    }

    const changeManager = (e) => {
        setonesprint({
            ...onesprint,
            sprintIssue: onesprint.sprintIssue.map(item => {
                if (item.issueNo !== e.target.id) {
                    return item;
                } else {
                    return {
                        ...item, [e.target.name]: e.target.value
                    }
                }
            })
        })
    }


    const nextpage = () => {
        if (currentPage + 1 <= pageInfo.maxPage) {
            setCurrentPage(currentPage + 1)
        }
    };

    const prevpage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    // console.log(onesprint);

    const startsprint = async () => {
        if (onesprint.sprintName !== undefined) {
            await postSprint(onesprint);
            handleCloseModal(false);
            window.location.reload();
        }
    }

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

                    <label className="sprintcreatelabel">스프린트 이름 </label>
                    <input type="text" classname="sprintcreatetext1" name="sprintName" onChange={sprintInfo} />
                    <br />

                    <label className="sprintcreatelabel">시작 날짜 </label>
                    <input type="date" classname="sprintcreatetext1" name="sprintStartday" onChange={sprintInfo} />
                    <br />

                    <label className="sprintcreatelabel">종료 날짜 </label>
                    <input type="date" classname="sprintcreatetext1" name="sprintEndday" onChange={sprintInfo} />
                    <br />

                    <div style={{ display: "flex", alignItems: "center" }}>

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
                                {issueList.map(issue =>
                                    <tr>
                                        <td style={{ border: "1px solid black" }}>
                                            <input type="checkbox" name="issueNo" value={issue.issueNo} onChange={issueCheck} />
                                        </td>
                                        <td style={{ border: "1px solid black" }}>{issue.issueName}</td>
                                        <td style={{ border: "1px solid black" }}>{issue.issueContent}</td>
                                        <td style={{ border: "1px solid black" }}>
                                            <select name="employeeNo" id={issue.issueNo} value={null} onChange={changeManager}>
                                                <option value=""></option>
                                                {userList.map(user =>
                                                    <option value={user.employeeNo}>{user.employeeName}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='button2' class="btn btn-outline-primary" style={{ width: "100px", height: "40px", float: "left" }} onClick={prevpage}> ◀ </button>
                        {pageNumber.map((num) => (
                            <li style={{ marginLeft: ' 35px', padding: "10px" }} className='pageno' key={num} onClick={() => setCurrentPage(num)}>
                                <span style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}>
                                    {num}
                                </span>
                            </li>
                        ))}
                        <button className='button2' class="btn btn-outline-primary" style={{width: "100px", height: "40px", float: "left" }} onClick={nextpage}>▶</button>

                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button class="btn btn-outline-primary" style={{ bottom: "100px", width: "100px", height: "40px", float: "left" }}
                            onClick={startsprint}>시작</button>
                        <button id="sprintCancel" class="btn btn-outline-danger" style={{ width: "100px", height: "40px", float: "right" }} onClick={handleCloseModal}>취소</button>
                    </div>
                </div>

            </Modal>
        </div>
    );
}

export default SprintCreate;