import '../../css/page.css';
import 로그인창 from '../../img/로그인창.png';

function Login() {

    
    return (
        <div>
            <img src={로그인창}/>
            <div className="login-box">
                <h2>Build-Up</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" placeholder="사번을 입력하세요." />
                        <label>사번</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" placeholder='비밀번호를 입력하세요.' />
                        <label>Password</label>
                    </div>
                    <a href="http://localhost:3002/mypage">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        로그인
                    </a>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        비밀번호 찾기
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;