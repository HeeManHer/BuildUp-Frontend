import { NavLink } from "react-router-dom";

function CreatedProject() {

    return (
        <>
        <div className="newproject"><h1>프로젝트</h1>
            <button className="button1">프로젝트 생성</button>

        </div>
            <hr className="line"/>
            
        <NavLink to="/ProjectManager">
        <div className="Create">
        
        <div><h6 className="build">Build Up</h6></div>
        <hr className="line2"/>
        <h5>희만은 우리의 희망</h5>
        </div>
        </NavLink>
        </>
        
    );
}
export default CreatedProject;