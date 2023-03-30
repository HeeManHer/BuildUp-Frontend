import { NavLink } from 'react-router-dom';

function ProjectSideBar() {

    return (
        // Sidebar
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink" />
                </div>
                <div class="sidebar-brand-text mx-3">Build Up</div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                메인 화면
            </div>

            {/* 프로젝트*/}
            <li class="nav-item">
                <NavLink to="/project">
                    <a class="nav-link">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>프로젝트</span>
                    </a>
                </NavLink>
            </li>

            {/* 내정보*/}
            <li class="nav-item">
                <NavLink to="/mypage">
                    <a class="nav-link">
                        <i class="fas fa-fw fa-wrench"></i>
                        <span>내정보</span>
                    </a>
                </NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                프로젝트
            </div>

            {/* 백로그 */}
            <li class="nav-item">
                <NavLink to="/project/backlog">
                    <a class="nav-link">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>백로그</span>
                    </a>
                </NavLink>
            </li>

            {/* 이슈 */}
            <li class="nav-item">

                <NavLink to="/project/issue">
                    <a class="nav-link">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>이슈</span>
                    </a>
                </NavLink>
            </li>

            {/* 스프린트 */}
            <li class="nav-item">
                <NavLink to="/project/sprint">
                    <a class="nav-link">
                        <i class="fas fa-fw fa-table"></i>
                        <span>스프린트</span>
                    </a>
                </NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider d-none d-md-block" />
        </ul>
        //    End of Sidebar
    );

}

export default ProjectSideBar;