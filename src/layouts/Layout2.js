import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import SideBar from "../components/commons/SideBar";
import { Outlet } from "react-router-dom";
import '../css/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';



function Layout2() {

    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout2;