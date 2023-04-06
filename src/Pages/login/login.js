import '../../css/page.css';
import 로그인창 from '../../img/로그인창.png';
import { NavLink } from "react-router-dom";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import Changebutton from './Changebutton';

function Login() {

    const navigate = useNavigate();

    let [id, setId] = useState('');
    let [pwd, setPwd] = useState('');

    const [button, setButton] = useState(true);

    function changeButton() {
        id.includes('') && pwd.length >= 1 ? setButton(false) :setButton(true);
      }

    const goToMyPage = () => {
        navigate('/mypage');
    };
    
    const realId = '20230401';
    const realPwd = '123';
    
    return (
        <div>
            <img src={로그인창} style={{height:'750px'}}/>
            <div className="login-box">
                <h2>Build-Up</h2>
                <form>
                    <div className="user-box">
                        <input 
                        type="text" 
                        placeholder="사번을 입력하세요." 
                        onChange={e => {
                            setId(e.target.value);
                        }} 
                        
                        />
                        <label>사번</label>
                    </div>
                    <div className="user-box">
                        <input 
                        type="password"
                        placeholder='비밀번호를 입력하세요.' 
                        onChange={e => {
                            setPwd(e.target.value);
                        }}
                        
                        />
                        <label>Password</label>
                    </div>
                    <button 
                    className='btn1'
                    onClick={e => {
                        if(realId == id && realPwd == pwd) {

                                e.stopPropagation();
                                goToMyPage();
                            
                        } else {
                            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                        }
                    }}
                    >
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        로그인
                    </a>
                    </button>
                    <button className='btn2'>
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        비밀번호 찾기
                    </a>
                    </button>
                </form>
            </div>
        </div>
        
         
    );
}

export default Login;