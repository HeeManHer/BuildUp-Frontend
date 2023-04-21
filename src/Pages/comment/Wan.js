import CommentForm from "../comment/CommentForm";
import CommentList  from "../comment/CommentList";
import Comment from "../comment/Comment";
import "../../css/Comment.css";

//Comment 안에 CommentForm(등록)
function Wan({issueNo}) {

    return (
        <>
            <Comment>
            <div className='comment-please'>
                <CommentForm issueNo={issueNo} />
                <CommentList issueNo={issueNo} />
            </div>
            </Comment>
            
        </>
    );
}


export default Wan;

