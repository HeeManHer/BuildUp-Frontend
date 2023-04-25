import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmployeebtnAPI } from '../../apis/EmployeebtnAPI';
import { useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

function ProjectSideBar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { projectNo } = useParams();

    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const employeeNo = token.sub;

    useEffect(() => {
        dispatch(EmployeebtnAPI(projectNo, employeeNo))
    });


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
                <a className="nav-link" onClick={() => navigate("/mypage/newProject")}>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>프로젝트</span>
                </a>
            </li>

            {/* 내정보*/}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/mypage")}>
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>내정보</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                프로젝트
            </div>

            {/* 백로그 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate(`/project/${projectNo}/backlog`)}>
                    <i className="fas fa-fw fa-folder"></i>
                    <span>백로그</span>
                </a>
            </li>

            {/* 이슈 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate(`/project/${projectNo}/issue`)}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>이슈</span>
                </a>
            </li>

            {/* 스프린트 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate(`/project/${projectNo}/sprint`)}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>스프린트</span>
                </a>
            </li>

            {/* 프로젝트 관리 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate(`/project/${projectNo}/manager`)}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>프로젝트 관리</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul >
        //    End of Sidebar
    );

}

export default ProjectSideBar;