import '../../css/project.css';

function ProjectManager() {
    return (
        <>
            <div className="newproject">
                <h1>프로젝트 관리/<span id="size">희만은 우리의 희망</span></h1>
                <button className="button1">프로젝트 삭제</button>
            </div>
            <hr className="line" />



            <div className="projectname">
                <h6>프로젝트 명</h6><h6 id="name">희만은 우리의 희망</h6>
            </div>
            <br />
            <div><h6 className="teamlist">팀원목록</h6></div>

            <div className="table">
                <table border="1">
                    <tr>
                        <td></td>
                        <td>이름</td>
                        <td>사번</td>
                        <td>이메일</td>
                        <td>권한</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>허희만</td>
                        <td>230101</td>
                        <td>hhm@buildup.com</td>
                        <td>PM</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>이준성</td>
                        <td>230201</td>
                        <td>ljs@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>최명건</td>
                        <td>230301</td>
                        <td>cmg@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>남효정</td>
                        <td>230401</td>
                        <td>nhj@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>조평훈</td>
                        <td>230501</td>
                        <td>jph@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>염진호</td>
                        <td>230601</td>
                        <td>yjh@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>박완규</td>
                        <td>230701</td>
                        <td>pwg@buildup.com</td>
                        <td>팀원</td>
                    </tr>
                </table>
            </div>

            <div className="crudButton">
                <button>추가</button>
                <button>삭제</button>
                <button>취소</button>
                <button>저장</button>
            </div>
        </>
    );

}

export default ProjectManager;