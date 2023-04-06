import React, { useState } from 'react'

function CommentForm(props) {
    const [comment, setComment] = useState('')

    const handleChange = event => {
        const value = event.target.value;
        setComment(value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.addList(comment);
        setComment('');
    }

    return (
        <li className='comment-form'>
            <form>
                <span className='ps_box'>
                    <input
                        type='text'
                        className='int'
                        placeholder='댓글을 입력해주세요.'
                        onChange={handleChange}
                        value={comment}
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
    )
}

export default CommentForm;