import '../../css/page.css';


function Mypage() {

    return (

        <div className="border">
            <div className="myname">
                <label>이름 : 허희만</label>
                {/* <input type="text" placeholder="이름을 입력하세요" /> */}
            </div>
            <br />
            <br />

            <br />
            <br />
            <div className="passwordupdate">
                <label>비밀번호 : </label>
                {/* 버튼에 링크 or 핸들러 이용해서 수정페이지로 넘어가게 해야됨 */}
                <button>  수정하기</button>
            </div>
            <br />
            <br />

            <br />
            <br />
            <div className="myemail">
                <label>Email : heeman0401@naver.com</label>
                {/* <input type="email" placeholder="이메일" /> */}
            </div>
        </div>
    );
}
export default Mypage;