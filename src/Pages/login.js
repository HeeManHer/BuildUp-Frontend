import '../css/page.css';

function Login() {

    return(
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                    <label>사번</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required=""/>
                    <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Find Password?
                </a>

            </form>
        </div>
    );
}

export default Login;