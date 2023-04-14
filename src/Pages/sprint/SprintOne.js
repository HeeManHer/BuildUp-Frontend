import React, { useState } from 'react';

function SprintOne() {

    return (
        <>
            <div className="newproject" dispaly="flex" justifyContent="space-between" >
                <h1>스프린트/<span id="size">스프린트 이름</span></h1>
                <div display="flex">
                    <button id="sprintDeleteBtn" className="button1" margin-left="auto">스프린트 삭제</button>
                    <button id="sprintEndBtn" className="button1" margin-left="auto">스프린트 완료</button>
                </div>
            </div>
            <hr className="line" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div id="board1" style={{
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
                                <span>할 일</span>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '10px', backgroundColor: 'blue' }}></div>
                        <div style={{ position: 'relative', margin: '10px', padding: '10px', border: '1px solid black' }}>
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
                <div id="board2" style={{
                    width: '200px',
                    height: '400px',
                    border: '1px solid black',
                    margin: '10px',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    alignItems: 'flex-start'
                }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid black' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                            <div style={{ border: '1px solid black', padding: '5px' }}>
                                <span>진행 중</span>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '10px', backgroundColor: 'blue' }}></div>
                        <div style={{ position: 'relative', margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈3</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 이준성</span>
                        </div>
                        <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>해결할 이슈4</span>
                            <br />
                            <span style={{ fontSize: '9px' }}>담당자 : 박완규</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SprintOne;
