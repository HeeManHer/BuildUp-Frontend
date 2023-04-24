import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProject, postProject } from '../../apis/NewprojectAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';
import "../../css/project.css";
import { callGetEmployeeAPI } from '../../apis/EmployeeAPICall';

function NewProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');


  const [inviteText, setInviteText] = useState('');
  const [inviteList, setInviteList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const token = decodeJwt(window.localStorage.getItem("accessToken"));

  const employeeReducer = useSelector(state => state.employeeReducer);
  const employee = employeeReducer.data;

  const { projectNo } = useParams();

  /* 리덕스 안썼을때 useState를 가지고 오는 방법 */
  useEffect(
    () => {
      getProject(token.sub).then(data => setItems(data.data));
    },
    []
  )

  const handleInviteTextChange = (event) => {
    setInviteText(event.target.value);
  };

  const handleInviteAdd = () => {
    if (inviteText == null || inviteText == "")
      return;
    setInviteList([...inviteList, { roleNo: 2, employeeName: inviteText }]);
    setInviteText('');
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      projectTitle: title,
      employeeName: [
        {
          roleNo: 1,
          employeeName: employee.employeeName
        },
        ...inviteList
      ]
    };
    if (title) { // 값이 모두 채워져 있는 경우에만 생성 가능
      if (selectedItemIndex === -1) {
        postProject(newItem);
      } else {
        const updatedItems = [...items];
        updatedItems[selectedItemIndex] = newItem;
        setItems(updatedItems);
      }
      setTitle('');
      setInviteText('');
      setInviteList([]);
      handleCloseModal();
      window.location.reload();
    }
  };

  const handleInviteRemove = (index) => {
    setInviteList(inviteList.filter(invite => inviteList.indexOf(invite) !== index));
  };


  // const handleEditItem = (index) => {
  //   setSelectedItemIndex(index);
  //   const selectedItem = items[index];
  //   setTitle(selectedItem.title);
  //   setManager(selectedItem.manager);
  //   setInviteText(selectedItem.inviteText);
  //   handleOpenModal();
  // };

  // const handleDeleteItem = (index) => {
  //   const updatedItems = [...items];
  //   updatedItems.splice(index, 1);
  //   setItems(updatedItems);
  // };



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
                담당자 : {employee && employee.employeeName}
              </label>
              <br />
              <br />
              <div>
                <label className="invite">
                  팀원 초대 : <input type="text" value={inviteText} onChange={handleInviteTextChange} style={{ width: '395px' }} />
                  <button className="btn btn-success btn-icon-split btn-sm" type="button" onClick={handleInviteAdd}>추가</button>
                </label>
                <div className="row" style={{ overflow: 'auto', height: '150px' }}>

                  {inviteList.map((invite, index) => (
                    <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px', display: 'flex', height: '40px' }}>
                      <div>
                        {invite.employeeName}
                      </div>
                      <button className='btn btn-danger btn-icon-split icon text-white fas fa-trash btn-sm' type="button" style={{ marginLeft: '20px' }} onClick={() => { handleInviteRemove(index) }}>삭제</button>
                    </div>
                  ))}
                </div>
                <br />
              </div>
              <div>
                <button className="button2" type="submit" >{selectedItemIndex === -1 ? "생성" : "Save"}</button>
                <button className="button33" type="button" onClick={() => handleCloseModal()}>{selectedItemIndex === -1 ? "취소" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="newproject">
        <h1>프로젝트</h1>
        {token.auth[0] == 1 &&
          <button className="button1" onClick={handleOpenModal}>프로젝트 생성</button>
        }
      </div>
      <hr className="line" />
      <div className="project2">
        {Array.isArray(items) && items.map((item, index) => (
          <div>
            <div className="build"><p>Build Up</p>
              <hr className="line2" />
              <NavLink to={`/project/${item.projectNo}/Manager`}>
                <div className="title2" style={{ height: '80px' }}><h4>{item.projectTitle}</h4></div>
                <div className="title3" style={{ height: '25px' }}><h6>(PM : {item.employeeName} )</h6></div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}
export default NewProject;