import "../../css/Comment.css";

function Comment(props) {
    return (
        <ul className="comment">
            <div style={{ overflow: "auto", height: "150px" }}>

                {props.children}
            </div>
        </ul>
    );
}

export default Comment;