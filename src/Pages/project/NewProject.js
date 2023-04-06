import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/project.css";

function NewProject() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [manager, setManager] = useState('');
  const [inviteText, setInviteText] = useState('');
  const [inviteList, setInviteList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleInviteTextChange = (event) => {
    setInviteText(event.target.value);
  };

  const handleInviteAdd = () => {
    if (inviteText == null || inviteText == "")
      return;
    setInviteList([...inviteList, inviteText]);
    setInviteText('');
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);             //true일때 생성가능함
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
      inviteText
    };

    if (title && manager) { // 값이 모두 채워져 있는 경우에만 생성 가능
      if (selectedItemIndex === -1) {
        setItems([...items, newItem]);
      } else {
        const updatedItems = [...items];
        updatedItems[selectedItemIndex] = newItem;
        setItems(updatedItems);
      }
      setTitle('');
      setManager('');
      setInviteText('');
      setInviteList([]);
      handleCloseModal();
    }
  };

  const handleInviteRemove = (index) => {
    setInviteList(inviteList.filter(invite => inviteList.indexOf(invite) !== index));
  };


  const handleEditItem = (index) => {
    setSelectedItemIndex(index);
    const selectedItem = items[index];
    setTitle(selectedItem.title);
    setManager(selectedItem.manager);
    setInviteText(selectedItem.inviteText);
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
          <div style={{ background: '#fff', padding: 30, borderRadius: '10px', width: '600px', height: '600px' }}>
            <h6 className="smalltitle">프로젝트 설정</h6>
            <hr className="line3" />
            <br />
            <form onSubmit={handleSubmit}>

              <h3 className="smalltitle2">프로젝트 생성</h3>
              <br />
              <br />
              <label className="title">
                제목 : <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} style={{ width: '395px' }} />
              </label>
              <br />
              <br />
              <label className="manager">
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
              <div>
                <label className="invite">
                  팀원 초대 : <input type="text" value={inviteText} onChange={handleInviteTextChange} style={{ width: '395px' }} />
                  <button type="button" onClick={handleInviteAdd}>추가</button>
                </label>
                <div className='row' style={{ overflow: 'auto', height: '150px' }}>

                  {inviteList.map((invite, index) => (
                    <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px', display: 'flex', height: '40px' }}>
                      <div>

                        {invite}
                      </div>
                      <button type="button" style={{ marginLeft: '20px' }} onClick={() => { handleInviteRemove(index) }}>X</button>
                    </div>
                  ))}
                </div>

                <br />

              </div>
              <button className='button2' type="submit" >{selectedItemIndex === -1 ? '생성' : 'Save'}</button>
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
              <NavLink to="project/Manager">
                <div className="title2" style={{ height: '80px' }}><h6>{item.title}</h6></div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default NewProject;