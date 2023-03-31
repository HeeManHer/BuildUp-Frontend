import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/project.css";

function NewProject() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [manager, setManager] = useState('');
  const [invite, setInvite] = useState('');
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
      manager,
      invite,
    };

    if (title && manager && invite) { // 값이 모두 채워져 있는 경우에만 생성 가능
      if (selectedItemIndex === -1) {
        setItems([...items, newItem]);
      } else {
        const updatedItems = [...items];
        updatedItems[selectedItemIndex] = newItem;
        setItems(updatedItems);
      }
      setTitle('');
      setManager('');
      setInvite('');
      handleCloseModal();
    }
  };

  const handleEditItem = (index) => {
    setSelectedItemIndex(index);
    const selectedItem = items[index];
    setTitle(selectedItem.title);
    setManager(selectedItem.manager);
    setInvite(selectedItem.invite);
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
          <div style={{ background: '#fff', padding: 30 }}>
            <h2>{selectedItemIndex === -1 ? title : title}</h2> {/* change the modal title depending on whether an item is being added or edited */}

            <form onSubmit={handleSubmit}>

              <label>
                제목 : <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              </label>
              <br />
              <br />
              <label>
                담당자 : <select value={manager} onChange={(event) => setManager(event.target.value)}>
                  <option value="">선택</option>
                  <option value="허희만">허희만</option>
                  <option value="남효정">남효정</option>
                  <option value="조평훈">조평훈</option>
                  <option value="이준성">이준성</option>
                  <option value="최명건">최명건</option>
                  <option value="박완규">박완규</option>
                  <option value="염진호">염진호</option>


                </select>
              </label>
              <br />
              <br />
              <label>
                팀원 초대 : <input type="text" value={invite} onChange={(event) => setInvite(event.target.value)} />
              </label>
              <br />
              <br />
              <br />

              <button className='button2' type="submit">{selectedItemIndex === -1 ? '생성' : 'Save'}</button>
                <button className="button3" type="button" onClick={() => handleCloseModal()}>{selectedItemIndex === -1 ? "취소" : "Cancel"}
                </button>
            </form>
          </div>
        </div>
      </div>

      <div className='newproject'>
        <h1>프로젝트</h1>
        <button className="button1" onClick={handleOpenModal}>프로젝트 생성</button>

      </div>
      <hr className="line" />

      <div className="project2">
        {items.map((item, index) => (
          <div>
            <div className="build"><p>Build Up</p>
              <hr className="line2" />
              <NavLink to="project/ProjectManager">
                <div className="title"><h6>{item.title}</h6></div>
              </NavLink>
            </div>
            {/* <button onClick={() => handleEditItem(index)}>수정</button>
                <button onClick={() => handleDeleteItem(index)}>삭제</button> */}
          </div>
        ))}
      </div>

    </div>
  );
}

export default NewProject;