import { NavLink } from 'react-router-dom';

function ProjectSideBar() {

    return (
        // Sidebar
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Build Up</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                메인 화면
            </div>

            {/* 프로젝트*/}
            <li className="nav-item">
                <NavLink to="/">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>프로젝트</span>
                    </a>
                </NavLink>
            </li>

            {/* 내정보*/}
            <li className="nav-item">
                <NavLink to="/mypage">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>내정보</span>
                    </a>
                </NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                프로젝트
            </div>

            {/* 백로그 */}
            <li className="nav-item">
                <NavLink to="/project/backlog">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>백로그</span>
                    </a>
                </NavLink>
            </li>

            {/* 이슈 */}
            <li className="nav-item">

                <NavLink to="/project/issue">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>이슈</span>
                    </a>
                </NavLink>
            </li>

            {/* 스프린트 */}
            <li className="nav-item">
                <NavLink to="/project/sprint">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>스프린트</span>
                    </a>
                </NavLink>
            </li>

            {/* 스프린트 */}
            <li className="nav-item">
                <NavLink to="/project/ProjectManager">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>프로젝트 관리</span>
                    </a>
                </NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        //    End of Sidebar
    );

}

export default ProjectSideBar;