import CommentForm from "../comment/CommentForm";
import CommentList  from "../comment/CommentList";
import Comment from "../comment/Comment";

function Wan({issueNo}) {

    return (
        <>
            <Comment>
                <CommentForm issueNo={issueNo} />
                <CommentList issueNo={issueNo} />
            </Comment>
        </>
    );
}

export default Wan;

