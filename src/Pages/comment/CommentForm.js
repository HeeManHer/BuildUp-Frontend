import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, addComment, deleteComment, updateComment } from "../../apis/CommentAPI";

// 댓글 등록
function CommentForm({ issueNo }) {
    const [comment, setComment] = useState({ issueNo: issueNo, employeeNo: '20230329', replyContent: "" });
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addComment(comment));
        dispatch(getComment(issueNo));
        setComment({ issueNo: issueNo, employeeNo: '20230329', replyContent: '' });
      };

    // 댓글 등록 화면
    return (
        <li className='comment-form'>
            <form>
                <span className='ps_box'>
                    <input
                        type='text'
                        className='int'
                        placeholder='댓글을 입력해주세요.'
                        onChange={e=>setComment({...comment, replyContent:e.target.value})}
                        value={comment.replyContent}
                    />
                </span>

                <button type='button' className="btn btn-success btn-icon-split btn-sm" onClick={handleSubmit}>
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">등록</span>
                </button>
            </form>
        </li>
    );
}

export default CommentForm;