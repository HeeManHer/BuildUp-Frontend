import React, { useState } from 'react';
import "../../css/backlog.css";

function Backlog() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [main, setMain] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleOpenModal = () => {
    setIsModalOpen(true);             //true일떄 생성가능함
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(-1);         //false면 생성불가능함
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title,
      main,
      status,
      priority,
    };

    if (selectedItemIndex === -1) {
      setItems([...items, newItem]);
    } else {
      const updatedItems = [...items];
      updatedItems[selectedItemIndex] = newItem;
      setItems(updatedItems);
    }

    setTitle('');
    setMain('');
    setStatus('');
    setPriority('');
    handleCloseModal();
  };

  const handleEditItem = (index) => {
    setSelectedItemIndex(index);
    const selectedItem = items[index];
    setTitle(selectedItem.title);
    setMain(selectedItem.main);
    setStatus(selectedItem.status);
    setPriority(selectedItem.priority);
    handleOpenModal();
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      {/* 모달스타일 적용 */}
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
          <div style={{ background: '#fff', padding: 16 }}>
            <h2>{selectedItemIndex === -1 ? title : title}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                제목 :
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              </label>
              <br />
              <label>
                내용 :
                <textarea value={main} onChange={(event) => setMain(event.target.value)} />
              </label>
              <br />
              <label>
                상태 :
                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                  <option value="">선택</option>
                  <option value="예정">예정</option>
                  <option value="진행 중">진행 중</option>
                  <option value="완료">완료</option>

                </select>
              </label>
              <br />
              <label>
                우선순위:
                <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                  <option value="">선택</option>
                  <option value="긴급">긴급</option>
                  <option value="보통">보통</option>
                  <option value="보류">보류</option>
                </select>
              </label>
              <br />
              <button type="submit">{selectedItemIndex === -1 ? '추가' : 'Save'}</button>
            </form>
          </div>
        </div>
      </div>


      <div className='zzz'>
        <h2>백로그</h2>
        <button className="button1" onClick={handleOpenModal}>백로그 생성</button>
      </div>



      <br />

      <div className='asd' />
      <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" />
      <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="검색"
          aria-label="Search" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
      <ul>


        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.main}</p>
            <p>상태 : {item.status}</p>
            <p>우선순위 : {item.priority}</p>
            <div>
              <button className='button1' onClick={() => handleEditItem(index)}>수정</button>
              <button className='button1' onClick={() => handleDeleteItem(index)}>삭제</button>
            </div>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Backlog;
