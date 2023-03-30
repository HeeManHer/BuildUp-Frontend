import '../../css/page.css';


function Mypage() {

    return (

        <div className="border">
            <div className="myname">
                <label>이름 : </label>
                <input type="text" placeholder="이름을 입력하세요" />
            </div>
            <br />
            <br />

            <br />
            <br />
            <div className="passwordupdate">
                <label>비밀번호 : </label>
                <button>  수정하기</button>
            </div>
            <br />
            <br />

            <br />
            <br />
            <div className="myemail">
                <label>Email : </label>
                <input type="email" placeholder="이메일" />
            </div>
        </div>
    );
}
export default Mypage;