import "../../css/Comment.css";


//댓글들이 창 안에 들어올 수 있게 만든 것
function Comment(props) {
    return (
        <ul className="comment">
            {props.children}
        </ul>
    );
}

export default Comment;