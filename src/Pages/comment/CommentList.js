import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, addComment, deleteComment, updateComment } from "../../apis/CommentAPI";
import CommentReducer from "../../modules/comment";
import "../../css/Comment.css";
import { decodeJwt } from "../../utils/tokenUtils";

//댓글 리스트 시작
function CommentList({ issueNo }) {

  const token = decodeJwt(window.localStorage.getItem("accessToken"));

  const [value, setValue] = useState('');
  const [update, setUpdate] = useState(null);

  const comments = useSelector(state => state.CommentReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getComment(issueNo));
    },
    [comments]
  );

  // console.log(issueNo) 작동하는지 확인용

  const handleClick = (index, event) => {
    setValue(event.target.innerHTML);
    setUpdate(index);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  //댓글 수정
  const updateKeyDown = (key, event) => {
    if (event.key !== 'Enter') return;

    const modifyComment = comments[key];


    setUpdate();
    dispatch(updateComment({ ...modifyComment, replyContent: value }));

  };

  //댓글 삭제
  const deleteList = (no) => {
    dispatch(deleteComment(no));
  };


  const rendList = () => {
    if (!comments) return null;

    return comments.map((item, key) =>
      <div className='comment-row' key={key}>
        <div className='comment-id'> {item.employeeNo} </div>
        <div className='comment-content'>
          {/* 댓글 수정 */}
          {update === key ? (
            <input
              type='text'
              value={value}
              onChange={handleChange}
              onKeyDown={(event) => updateKeyDown(key, event)}
              className='comment-update-input'
            />
          ) : (
            <>
              <span onClick={(event) => handleClick(key, event)}>{item.replyContent}</span>
            </>
          )}
        </div>

        {/* 댓글 날짜 */}
        <div className='comment-date'>{new Intl.DateTimeFormat('kr').format(new Date(item.replyDate))}
          {/* 댓글삭제 */}
          {token.sub == item.employeeNo ?
            <button
              type="button"
              className='btn btn-danger btn-icon-split icon text-white-50 fas fa-trash btn-sm'
              onClick={() => deleteList(item.replyNo)}
            >
              삭제
            </button>
            :
            <></>
          }
        </div>
      </div>

    );
  };
  return <div>{rendList()}</div>;
}


export default CommentList;