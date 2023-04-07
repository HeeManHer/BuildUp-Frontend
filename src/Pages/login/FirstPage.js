import 첫페이지 from '../../img/첫페이지.png';
import { NavLink } from "react-router-dom";

function firstpage() {

    return(
        <div className="first-box">
            <img className="first" src={첫페이지}>
                <button className="start-btn">시작하기</button>
            </img>    
        </div>
    );
}

export default firstpage;