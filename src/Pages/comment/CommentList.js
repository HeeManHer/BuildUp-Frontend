import React, { useState } from 'react';

function CommentList(props) {
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);

    const handleClick = (index, event) => {
        setValue(event.target.innerHTML);
        setUpdate(index);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);
    };

    const updateKeyDown = (key, event) => {
        if (event.key !== 'Enter') return;

        const newList = [...props.list];
        newList[key].content = value;

        setUpdate(null);
        props.updateList(newList);
    };

    const deleteList = (key) => {
        const { updateList, list } = props;
        const newList = [...list].filter((item, index) => index !== key);

        updateList(newList);
    };

    const rendList = () => {
        return props.list.map((item, key) => {
            return (
                <div className='comment-row' key={key} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='comment-id' style={{ marginRight: '1rem' }}>{item.userid}</div>
                    <div className='comment-content' style={{ flex: 1 }}>
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
                                <span onClick={(event) => handleClick(key, event)}>{item.content}</span>
                                <button
                                    className='btn btn-danger btn-icon-split icon text-white-50 fas fa-trash btn-sm'
                                    onClick={() => {
                                        deleteList(key);
                                    }}
                                >
                                    삭제
                                </button>
                            </>
                        )}
                    </div>
                    <div className='comment-date' style={{ marginLeft: '1rem' }}>{item.date}</div>
                </div>
            );
        });
    };

    return <div>{rendList()}</div>;
}

export default CommentList;