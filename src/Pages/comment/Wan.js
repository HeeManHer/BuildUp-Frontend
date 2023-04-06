import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";


function Wan() {
    // const [value, setValue] = useState('');
    const [list, setList] = useState([{ userid: '', content: 'asd', date: '1' }]);

    const addList = (content) => {
        const lastComment = list.length === 0 ? null : list[list.length - 1];
        const newUserId = lastComment ? Number(lastComment.userid) + 1 : 1;
        const today = new Date().toISOString().substr(0, 10);
        setList([
            ...list,
            { userid: newUserId, content, date: today }
        ]);
    };

    const updateList = (updatedList) => {
        setList(updatedList);
    };

    return (
        <>
            <Comment>
                <CommentForm addList={addList} />
                <CommentList list={list} updateList={updateList} />
            </Comment>
        </>
    );
}

export default Wan;