import React, { useState } from 'react';
import "../../css/backlog.css";


function Backlog() {
  const [items, setItems] = useState([
    {
      no:1,
      title:"",
      main:"",
      status:"",
      priority:""
    },
   

  ]);
  const [title, setTitle] = useState('');
  const [main, setMain] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [page, setPage] = useState(1);

     // 모달 열기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

// 모달 닫기 및 selectedItemIndex 초기화
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(-1);
  };

   // 다음 페이지로 이동
  const nextpage =() =>{
    if (items.length / 5 >= page) setPage(page + 1);
  };

   // 다음 페이지로 이동
  const prevpage = () => {
    if (page - 1 > 0) setPage(page - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      no: items.length + 1,
      title,
      main,
      status,
      priority,
    };
    
    if (selectedItemIndex === -1) {
      setItems([...items, newItem]);
    } else {
      const updatedItems = [...items];
      updatedItems[selectedItemIndex] = {...newItem,no:updatedItems[selectedItemIndex].no};
      setItems(updatedItems);
    }
    
    setTitle('');
    setMain('');
    setStatus('');
    setPriority('');
    handleCloseModal();
  };
 // 선택된 항목의 정보를 가져와서 state에 할당하고 모달열기
  const handleEditItem = (index) => {
    setSelectedItemIndex(index);
    const selectedItem = items[index];
    setTitle(selectedItem.title);
    setMain(selectedItem.main);
    setStatus(selectedItem.status);
    setPriority(selectedItem.priority);
    handleOpenModal();
  };
    //선택 항목 삭제
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

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
          }}
          onClick={handleCloseModal}
        />
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ background: '#fff', padding: 30, borderRadius: '10px', width: '600px', height: '600px' }}>
            <h2>{selectedItemIndex === -1 ? "" : title}</h2>
            <h6 className="smalltitle">백로그 설정</h6>
            <hr className="line3" />
            <br/>
            <form onSubmit={handleSubmit}>
            <h3 className="smalltitle2">백로그</h3>
              
              <label className="title">
              제목:
                <input value={title} onChange={(event) => setTitle(event.target.value)} style={{ width: '395px' }} />
              </label>
              <br />
              <br />
              <label className="title">
                내용 
                <br/>
                <textarea value={main} onChange={(event) => setMain(event.target.value)} style={{width : '500px', height : '200px'}} />
              </label>
              <br />
              <label className='title'>
              상태 :     <select value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="">선택</option>
              <option value="예정">예정</option>
                  <option value="진행 중">진행 중</option>
                  <option value="완료">완료</option>
            </select>
</label>
<br />
<label className='manager'>
  우선순위 :
  <select value={priority} onChange={(event) => setPriority(event.target.value)}>
    <option value="">선택</option>
    <option value="긴급">긴급</option>
    <option value="보통">보통</option>
    <option value="보류">보류</option>
  </select>
</label>
<br/>
<br />
          <button className='button2' type="submit">{selectedItemIndex === -1 ? '추가' : '저장'}</button>
          <button className='button2' type="button" onClick={handleCloseModal}>
            닫기
          </button>
        </form>
      </div>
      </div>
      </div>

      <div>
      </div>
      
      <div className='bar'>
        <h2>백로그</h2>
        <button className="button1" onClick={handleOpenModal}>백로그생성</button>
      </div>
          
<br/>
      {/* 검색창 스타일 */}
      <div className='line' />

<br/>
        <table>
          <thead>
          <li className='blue'>       {/*메뉴바*/}
            <h4>제목</h4>
            <h4>내용</h4>
            <h4>상태</h4>
            <h4>우선순위</h4>
  <div></div>
          </li>
          <br/>
    </thead>
    <div>
      {items.slice((page - 1) * 5, page * 5).map((item, index) => (
        <tr className='in' key={item.no}>
          <td>{item.title}</td>
          <td>{item.main}</td>
          <td>{item.status}</td>
          <td>{item.priority}</td>
          <td>
            <button className='button2' onClick={() => handleEditItem((page - 1) * 5 + index)}>
              수정
            </button>
            <button className='button2' onClick={() => handleDeleteItem((page - 1) * 5 + index)}>
              삭제
            </button>
          </td>
        </tr>
      ))}
    </div>
  </table>
  <br/>
  <button className='button2' onClick={prevpage}>   {/*이전버튼*/}
    이전 
  </button>
  <span>{page}</span>           {/*페이지 번호 보여주기*/}
  <button className='button2' onClick={nextpage}>   {/*다음버튼*/}
    다음 
  </button>

</div>
  );
}
export default Backlog;