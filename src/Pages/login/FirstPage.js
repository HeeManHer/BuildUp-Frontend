import 첫페이지 from '../../img/첫페이지.png';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Firstpage() {

    const navigate = useNavigate();

    const onClickHandler = () => { 
        navigate("./auth/login", { replace: true })
    }

    return(
        <>
        <img src={첫페이지} style={{height:'750px'}}/>
        <div className="first-box">
                <button 
                className="start-btn"
                onClick={onClickHandler}
                >
                시작하기
                </button> 
        </div>
        </>
    );
}

export default Firstpage;