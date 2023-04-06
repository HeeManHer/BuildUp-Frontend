import React from 'react';
// import '../../../assets/css/modal.css';
import '../../css/loginModal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <button className="close" onClick={close}>
              &times;
            </button> */}
          </header>
          <main>{props.children}</main>
          <footer>
            {/* 취소버튼 없애려면 여기만 버튼 태그만 제거하면 됩니다. */}
            <button className="close" onClick={close}>
              취소
            </button>
            <button className="close" onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;