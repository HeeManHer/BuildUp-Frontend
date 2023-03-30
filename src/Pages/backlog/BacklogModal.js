import React from 'react';
import PropTypes from 'prop-types';

function BacklogModal(props) {
  const { isOpen, onClose, onSubmit, title, setTitle, main, setMain, status, setStatus, priority, setPriority } = props;

  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">백로그 생성</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">제목</label>
            <div className="control">
              <input className="input" type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">내용</label>
            <div className="control">
              <textarea className="textarea" placeholder="내용을 입력하세요" value={main} onChange={(e) => setMain(e.target.value)}></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">상태</label>
            <div className="control">
              <div className="select">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">선택</option>
                  <option value="예정">예정</option>
                  <option value="진행 중">진행 중</option>
                  <option value="완료">완료</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">우선순위</label>
            <div className="control">
              <div className="select">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="">선택</option>
                  <option value="긴급">긴급</option>
                  <option value="보통">보통</option>
                  <option value="보류">보류</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSubmit}>저장</button>
          <button className="button" onClick={onClose}>취소</button>
        </footer>
      </div>
    </div>
  );
}

BacklogModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  main: PropTypes.string.isRequired,
  setMain: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  priority: PropTypes.string.isRequired,
  setPriority: PropTypes.func.isRequired
};

export default BacklogModal;
