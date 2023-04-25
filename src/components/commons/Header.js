import { useNavigate } from "react-router-dom";
import { decodeJwt } from '../../utils/tokenUtils';
import { callGetEmployeeAPI, callLogoutAPI } from "../../apis/EmployeeAPICall";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import employeeReducer from "../../modules/EmployeeModule";

function Header() {
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const employee = useSelector(state => state.employeeReducer);
    const employeeDetail = employee.data;


    useEffect(
        () => {
            if (token !== null) {
                dispatch(callGetEmployeeAPI(token.sub));
            }
        },
        []
    );

    if (token === null) {
        alert("로그인 해주세요");
        navigate("/", { replace: true });
    }

    const logout = () => {
        alert("로그아웃합니다");
        window.localStorage.removeItem("accessToken");
        navigate("/", { replace: true });
        dispatch(callLogoutAPI());
    }



    return (
        // <!-- Topbar -->
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* 상단 바 - 헤더 */}
            <ul className="navbar-nav ml-auto">
                {/* 알람 */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        {/* 알람 개수 */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* 유저 정보 */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle">
                        <span className="mr-2 d-none d-lg-inline text-gray-600">{employeeDetail && employeeDetail.employeeName}</span>
                    </a>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow" onClick={logout}>
                    <a className="nav-link dropdown-toggle">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        로그아웃
                    </a>
                </li>
            </ul>
        </nav>
        // <!-- End of Topbar-- > 
    );
}

export default Header;