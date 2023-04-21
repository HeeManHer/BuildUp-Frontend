import React, { useState, useEffect } from 'react';
import "../../css/backlog.css";
import { getBacklog, postBacklog, putBacklog, deleteBacklog, searchBacklog } from '../../apis/backlogAPI.js';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function Backlog() {
  const { projectNo } = useParams();
  const [oneitem, setOneitem] = useState({ projectNo });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setsearchValue] = useState('');

  const dispatch = useDispatch();

  const backlogReducer = useSelector(state => state.BacklogReducer);

  const backlogList = backlogReducer.data;
  const pageInfo = backlogReducer.pageInfo;

  const pageNumber = [];
  if (pageInfo) {
    for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
      pageNumber.push(i);
    }
  }
  //전체 백로그들 조회
  useEffect(
    () => {
      dispatch(getBacklog(projectNo, currentPage, searchValue));
    },
    [currentPage]
  )
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
  // 10페이지 추가
  const doublenextpage = () => {
    const next = Math.min(currentPage + 10, pageInfo.maxPage);
    setCurrentPage(next);
  }
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

        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 11 }}>
          <div style={{ background: '#fff', padding: 30, borderRadius: '10px', width: '600px', height: '600px' }}>
            <h2>{selectedItemIndex === -1 ? "" : ""}</h2>
            <h6 className="smalltitle">백로그 설정</h6>
            <hr className="line3" />
            <br />

            <form onSubmit={handleSubmit}>
              <h3 className="smalltitle2">백로그</h3>


              <label className="title">
                제목:
                <input value={oneitem.backlogName} onChange={(event) => setOneitem({ ...oneitem, backlogName: event.target.value })} style={{ width: '395px' }} />
              </label>
              <br />
              <br />
              <label className="title">
                내용
                <br />
                <textarea value={oneitem.backlogContent} onChange={(event) => setOneitem({ ...oneitem, backlogContent: event.target.value })} style={{ width: '500px', height: '200px' }} />
              </label>
              <br />
              <label className='title'>
                상태 :     <select value={oneitem.backlogStatus} onChange={(event) => setOneitem({ ...oneitem, backlogStatus: event.target.value })}>
                  <option value="">선택</option>
                  <option value="예정">예정</option>
                  <option value="진행 중">진행 중</option>
                  <option value="완료">완료</option>
                </select>
              </label>
              <br />
              <label className='manager'>
                우선순위 :
                <select value={oneitem.backlogPriority} onChange={(event) => setOneitem({ ...oneitem, backlogPriority: event.target.value })}>
                  <option value="">선택</option>
                  <option value="긴급">긴급</option>
                  <option value="보통">보통</option>
                  <option value="보류">보류</option>
                </select>
              </label>
              <br />
              <br />
              <button className='button2' type="submit">{selectedItemIndex === -1 ? '추가' : '저장 '}</button>
              <button className='button2' type="button" onClick={handleCloseModal}>
                닫기
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='bar'>
        <h2>백로그</h2>
        <button className="button1" onClick={handleOpenModal}>백로그생성</button>
      </div>

      <br />

      <div className='line' />

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
      <br />

      <table>
        <div>
          <li className='blue'>       {/*메뉴바*/}
            <h4>제목</h4>
            <h4>내용</h4>
            <h4>상태</h4>
            <h4>우선순위</h4>
            <div></div>
          </li>
          <br />
        </div>
        <div>
          {backlogList.map((item) => (
            <tr className='in' key={item.backlogNo}>

              <td className='in2'>{item.backlogName}</td>
              <td className='in2'>{item.backlogContent}</td>
              <td className='in2'>{item.backlogStatus}</td>
              <td className='in2'>{item.backlogPriority}</td>
              <td>
                <button className='button2' onClick={() => handleEditItem(item)}>
                  수정
                </button>
                <button className='button2' onClick={() =>
                  deleted(item, window.location.reload())
                }>삭제</button>
              </td>

            </tr>
          ))}
        </div>
      </table>
      <br />

      <div className='pagebutton' >
        <span> <button className='button2' onClick={doubleprevpage}> ◀◀ </button></span>
        <span> <button className='button2' onClick={prevpage}> ◀ </button></span>
        {pageNumber.map((num) => (
          <li className='pageno' key={num} onClick={() => setCurrentPage(num)}>
            <span
              style={currentPage === num ? { backgroundColor: 'cornflowerblue' } : null}

            >
              {num}
            </span>
          </li>
        ))}


        <span style={{ marginLeft: ' 35px' }}><button className='button2' onClick={nextpage}>▶</button></span>
        <span><button className='button2' onClick={doublenextpage}>▶▶</button></span>
      </div>
    </div >
  );
}
export default Backlog;

