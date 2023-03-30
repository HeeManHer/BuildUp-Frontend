import '../../css/page.css';

function Findpassword() {
    return (
        <div className="find-box">
            <div className="name">
                <label>이름 : </label>
                <input type="text" />
            </div>
            <br />
            <br />
            <hr />
            <div className="id">
                <label>사번 : </label>
                <input type="text" />
            </div>
            <br />
            <br />
            <hr />
            <div className="email">
                <label>이메일 : </label>
                <input type="email" />
            </div>
        </div>
    );

}

export default Findpassword;