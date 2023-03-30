// import '../../css/sb-admin-2.min.css';
import '../../css/page.css';

function Changepassword() {

    return (
        <div className="border">
            <div className="now">
                <label>현재 비밀번호 : </label>
                <input type="password" placeholder="현재 비밀번호를 입력하세요" />
            </div>
            <br />
            <br />
            <div className="new">
                <label>새 비밀번호 : </label>
                <input type="password" placeholder="새 비밀번호를 입력하세요" />
            </div>
            <br />
            <br />
            <div className="newOk">
                <lable>새 비밀번호 확인 : </lable>
                <input type="password" placeholder="새 비밀번호 확인" />
            </div>
        </div>
    );

}

export default Changepassword;