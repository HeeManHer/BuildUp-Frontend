function LoginHeader() {

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
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Login</span>
                    </a>
                </li>
            </ul>
        </nav>
        // <!-- End of Topbar-- > 
    );
}

export default LoginHeader;