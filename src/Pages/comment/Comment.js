import "../../css/Comment.css";

function Comment(props) {
    return (
        <ul className="comment">
            {props.children}
        </ul>
    );
}

export default Comment;