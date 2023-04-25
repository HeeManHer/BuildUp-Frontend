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
        <div className="first-box">
        {/* <img src={첫페이지} style={{height:'750px'}}/> */}
                <button 
                style={{border:'none'}}
                className="start-btn"
                onClick={onClickHandler}
                >
                <img src={첫페이지} style={{height:'830px', width:'1520px'}}/>
                </button> 
        </div>
        </>
    );
}

export default Firstpage;