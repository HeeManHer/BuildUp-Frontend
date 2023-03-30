import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import MypageSideBar from "../components/commons/MypageSideBar";
import { Outlet } from "react-router-dom";
import '../css/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';



function MypageLayout() {

    return (
        <>
            <div id="wrapper">
                <MypageSideBar />
                <div id="content-wrapper" className="d-flex flex-column">
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

export default MypageLayout;