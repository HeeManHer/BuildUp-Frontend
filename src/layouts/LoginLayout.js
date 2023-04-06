// import Footer from "../components/commons/Footer";
import LoginHeader from "../components/commons/LoginHeader";
import LoginSideBar from "../components/commons/LoginSideBar";
import { Outlet } from "react-router-dom";
import '../css/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';



function LoginLayout() {

    return (
        <>
            <div id="wrapper">
                <LoginSideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <LoginHeader />
                        <Outlet />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    )
}

export default LoginLayout;