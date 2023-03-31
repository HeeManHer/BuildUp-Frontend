import { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

class Wan extends Component {

    state = {
        value: '',
        list:[
            {userid:'', content:'', date: ''},
        ]
    }

    addList = (content) => {
        const lastComment = this.state.list.length === 0 ? null : this.state.list[this.state.list.length - 1];
        const newUserId = lastComment ? Number(lastComment.userid) + 1 : 1;
        const today = new Date().toISOString().substr(0, 10); // 현재 날짜를 YYYY-MM-DD 형식으로 가져옴
        this.setState({
          list:[
            ...this.state.list,
            {userid: newUserId.toString(), content, date: today}
          ]
        })
      }

    updateList = list => {
        this.setState({
            ...this.state,
            list,
        })
    }

    render() {
        return(
            <>
                <Comment>
                    <CommentForm addList = {this.addList}/>
                    <CommentList list = { this.state.list }
                                updateList = {this.updateList}
                    />
                </Comment>
            </>
        )
    }
}

export default Wan