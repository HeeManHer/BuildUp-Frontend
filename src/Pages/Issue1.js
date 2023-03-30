import React, { useState } from 'react';
import "../css/Issue.css";
import { NavLink } from 'react-router-dom';

function Issue1() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setsituation] = useState('');
    const [backlogname, setBacklogname] = useState('');
    const [issuecreate, setissuecreate] = useState('');

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);
    const handleSituationChange = (event) => setsituation(event.target.value);
    const handleissuecreate = (event) => setissuecreate(event.target.value);

    return (
        <>
            <h1 className="head1">이슈
                <NavLink to="/isuuecreate" className="createissue" value={issuecreate} onChange={handleissuecreate} >이슈 생성</NavLink>
            </h1>
            <div className="container1">
                <div className="issuelist">
                    {/* 왼쪽 목록을 볼 수 있는 영역 */}
                    <header>이슈</header>
                    <ul>
                        <br />
                        <li>Issue1</li>
                        <li>Issue2</li>
                        <li>Issue4</li>
                        <li>Issue5</li>
                        <li>Issue6</li>
                        <li>Issue7</li>
                        <li>Issue8</li>
                        <li>Issue9</li>
                        <li>Issue10</li>
                    </ul>
                </div>

                <div className="box">
                    <div>

                        <div className="issuename">
                            <input type="text" value={title} onChange={handleTitleChange} style={{ width: "100%" }} />
                        </div>
                        <form className="ISSUE">


                            <br />
                            <label>
                                설명:
                                <input type="text" value={description} onChange={handleDescriptionChange} />
                            </label>
                            <br />
                            <label>
                                중요도:
                                <select value={priority} onChange={handlePriorityChange}>
                                    <option value="">선택</option>
                                    <option value="high">긴급</option>
                                    <option value="medium">중간</option>
                                    <option value="low">낮음</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                상태:
                                <select value={situation} onChange={handleSituationChange}>
                                    <option value="">선택</option>
                                    <option value="ing">진행중</option>
                                    <option value="complete">완료</option>
                                </select>
                            </label>
                            <div>
                                <button type="save">저장</button>
                                <button type="submit">수정</button>
                            </div>
                            <br />
                            <label>
                                백로그 이름:
                                <input type="text" value={backlogname} onChange={handleBacklognameChange} />
                            </label>
                            <br />
                            <div className="btnIssue">

                                <button type="save1">저장</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div>

        </>

    );
}

export default Issue1;
