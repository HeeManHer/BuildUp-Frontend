import CommentForm from "../comment/CommentForm";
import CommentList  from "../comment/CommentList";
import Comment from "../comment/Comment";

//Comment 안에 CommentForm(등록)
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

