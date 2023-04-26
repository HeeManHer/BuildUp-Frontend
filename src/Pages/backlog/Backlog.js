import React, { useState, useEffect } from 'react';
import "../../css/backlog.css";
import { getBacklog, postBacklog, putBacklog, deleteBacklog, searchBacklog } from '../../apis/backlogAPI.js';
// import { EmployeebtnAPI } from '../../apis/EmployeebtnAPI.js';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

function Backlog() {
  const { projectNo } = useParams();
  const [oneitem, setOneitem] = useState({ projectNo });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setsearchValue] = useState('');
  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const dispatch = useDispatch();

  // 권한 2번이 백로그라 백로그권한 crud만 전체에서 뽑아서 가져오기
  const authorityReducer = useSelector(state => state.employeebtnReducer);
  const auth = authorityReducer.map(auth => {
    if (auth.typeNo == 2) return auth.authorityState
  })
  const backlogReducer = useSelector(state => state.BacklogReducer);

  const backlogList = backlogReducer.data;
  const pageInfo = backlogReducer.pageInfo;

  //페이징 처리
  const pageNumber = [];
  if (pageInfo) {
    for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
      pageNumber.push(i);
    }
  }

  //전체 백로그들 조회
  useEffect(
    () => {
      dispatch(getBacklog(projectNo, currentPage, searchValue))
    },
    [currentPage]
  );
  // 모달 열기 
  const handleOpenModal = () => {
    setSelectedItemIndex(-1);
    setIsModalOpen(true);
  };

  // 모달 닫기 및 selectedItemIndex 초기화
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(-1);
    window.location.reload();
  };

  //deleted 호출 delete api 전송
  const deleted = (oneitem) => {
    dispatch(deleteBacklog(oneitem));
  }

  // 다음 페이지로 이동
  const nextpage = () => {
    if (currentPage + 1 <= pageInfo.endPage) {
      setCurrentPage(currentPage + 1);
    } else {
      doublenextpage();
    }
  };

  const doublenextpage = () => {
    const next = Math.min(currentPage + 10, pageInfo.maxPage);
    const nextStart = next - ((next - 1) % 10);
    setCurrentPage(nextStart);
  };




  // 이전 페이지로 이동
  const prevpage = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
    } else {
      doubleprevpage();
    }
  };
  // 10페이지 뺴기
  const doubleprevpage = () => {
    const prev = Math.max(currentPage - 10, 1);
    setCurrentPage(prev);
  };

  //handleSubmit이벤트 정의
  const handleSubmit = (event) => {
    event.preventDefault();
    //selectedItemIndex -1이면 추가
    if (selectedItemIndex === -1) {
      dispatch(postBacklog(oneitem));
    } else {
      //아니면 수정
      dispatch(putBacklog(oneitem));
    }
    setOneitem({ projectNo });
    handleCloseModal();
  };

  // 선택된 항목의 정보를 가져와서 state에 할당하고 모달열기
  const handleEditItem = (item) => {
    setSelectedItemIndex(1);
    setOneitem(item);
    setIsModalOpen(true);
  };
  //선택 항목 삭제

  const search = () => {
    dispatch(searchBacklog(searchValue, projectNo));

  }

  return (
    <div>
      <div style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10
          }}
          onClick={handleCloseModal}
        />

        {/* 모달창 표시 */}
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 11 }}>
          <div style={{ background: '#fff', padding: 30, borderRadius: '10px', width: '600px', height: '600px' }}>
            <h2>{selectedItemIndex === -1 ? "" : ""}</h2>
            <h6 className="smalltitle">백로그</h6>
            <hr className="line3" />

            <form onSubmit={handleSubmit}>
              <h3 className="smalltitle2">백로그 생성</h3>
              <br />
              <label className="invite">
                {/* 모달 제목 */}
                제목 : <input value={oneitem.backlogName} onChange={(event) => setOneitem({ ...oneitem, backlogName: event.target.value })} style={{ width: '450px' }} />
              </label>
              <br />
              <br />
              {/* 모달 설명 */}
              <label className="invite">내용 : </label>
              <textarea value={oneitem.backlogContent} onChange={(event) => setOneitem({ ...oneitem, backlogContent: event.target.value })} style={{ width: '495px', height: '150px', marginLeft: '20px', resize: 'none' }} />
              <br />
              <br />
              <label className='invite'>
                {/* 모달안에 상태 선택박스 */}
                상태 : <select value={oneitem.backlogStatus} onChange={(event) => setOneitem({ ...oneitem, backlogStatus: event.target.value })}>
                  <option value="">선택</option>
                  <option value="예정">예정</option>
                  <option value="진행중">진행중</option>
                  <option value="완료">완료</option>
                </select>
              </label>

              <br />
              <label className='invite'>
                {/* 모달안에 우선순위 선택박스 */}
                우선순위 : <select value={oneitem.backlogPriority} onChange={(event) => setOneitem({ ...oneitem, backlogPriority: event.target.value })}>
                  <option value="">선택</option>
                  <option value="긴급">긴급</option>
                  <option value="보통">보통</option>
                  <option value="보류">보류</option>
                </select>
              </label>
              <br />
              <br />
              {/* selectedItemIndex가 -1이면 생성 아니면 권한비교해서 저장 */}
              {selectedItemIndex === -1 ?
                <button className="btn btn-outline-primary" type="submit"> 생성 </button>
                : auth.indexOf('U') >= 0 && <button className="btn btn-outline-primary" type="submit"> 저장</button>}
              <button className="btn btn-outline-danger" style={{ marginLeft: "50px" }} type="button" onClick={handleCloseModal}>
                닫기
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='newproject'>
        <h1>백로그</h1>
        {/* 권한 비교해서 권한이 맞으면 백로그 생성 모달창 열기 */}
        {auth.indexOf('C') >= 0 && (
          <button className="btn btn-outline-primary" style={{ position: 'sticky', top: '100px', right: '10px', width: "200px" }} onClick={handleOpenModal}>백로그생성</button>
        )}
      </div>

      <hr className='line' />

      {/* 검색창 스타일 */}
      <div className="input-group" style={{ position: 'sticky', left: "1290px", width: "400px" }}>
        <input
          type="text"
          className="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              search();
            }
          }}
        />

        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={search}>
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
      <br />

      <table className="table table-striped table-hover" width="90%">
        <thead>       {/*메뉴바*/}
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>상태</th>
            <th>우선순위</th>
          </tr>
        </thead>

        <tbody >
          {backlogList.map((item) => (
            <tr key={item.backlogNo}>
              <td >{item.backlogName && item.backlogName.length > 10 ? item.backlogName.substring(0, 10) + "..." : item.backlogName}</td>
              <td >{item.backlogContent && item.backlogContent.length > 10 ? item.backlogContent.substring(0, 10) + "..." : item.backlogContent}</td>
              <td >{item.backlogStatus}</td>
              <td >{item.backlogPriority}</td>
              <td >
                <button className="btn btn-outline-primary btn-sm" style={{ position: 'sticky', top: '100px', right: '100px', width: "100px" }} onClick={() => handleEditItem(item)}>
                  {/* 모달내용 조회 */}
                  조회
                </button>
                {/* 권한비교해서 맞으면 삭제 */}
                {auth.indexOf('D') >= 0 && (
                  <button className="btn btn-outline-danger btn-sm" style={{ position: 'sticky', top: '100px', right: '100px', width: "100px" }} onClick={() =>
                    deleted(item, window.location.reload())
                  }>삭제</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      {/* 뒤로가기 앞으로가기 10페이지뒤로 10페이지 앞으로 버튼 */}
      <div className='pagebutton' >
        <span style={{ marginLeft: ' 10px', padding: "5px" }}> <button className="btn btn-outline-primary" onClick={doubleprevpage}> ◀◀ </button></span>
        <span > <button className='button2' class="btn btn-outline-primary" onClick={prevpage}> ◀ </button></span>
        {pageNumber.map((num) => (
          <li style={{ marginLeft: ' 10px', padding: "5px" }} className='pageno' key={num} onClick={() => setCurrentPage(num)}>
            <span style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}>
              {num}
            </span>
          </li>
        ))}
        <span style={{ marginLeft: ' 10px', padding: "5px" }}><button className="btn btn-outline-primary" onClick={nextpage}>▶</button></span>
        <span><button className='button2' class="btn btn-outline-primary" onClick={doublenextpage}>▶▶</button></span>
      </div>
    </div >
  );
}

export default Backlog;

