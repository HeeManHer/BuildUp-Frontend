import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import SideBar2 from "../components/commons/SideBar2";
import { Outlet } from "react-router-dom";
import '../css/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';



function Layout3() {

    return (
        <>
            <div id="wrapper">
                <SideBar2 />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout3;