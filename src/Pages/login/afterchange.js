function Afterchange() {

    return(

        <div className="change-box">
            <div className="newpass">
                <label>새 비밀번호 : </label>
                <input type="password" placeholder="새 비밀번호 입력"/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="checknew">
                <label>새 비밀번호 확인</label>
                <input type="password" placeholder="다시 한 번 입력해주세요"/>
            </div>
            <div className="changebtn">
                <button>변경</button>
            </div>
        </div>

    );

}

export default Afterchange;