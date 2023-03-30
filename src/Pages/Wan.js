import { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommenList from "./CommentList";

class Wan extends Component {

    state = {
        value: '',
        list:[
            {userid: '1', content:'테스트1', date: '2022-03-29'},
            {userid: '2', content:'테스트2', date: '2022-03-29'},
            {userid: '3', content:'테스트3', date: '2022-03-29'}
        ]
    }

    addList = (content) => {
        this.setState({
            list:[
                ...this.state.list,
                {userid: 'userid',content,date:'2022-03-29'}
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
                    <CommenList list = { this.state.list }
                                updateList = {this.updateList}
                    />
                </Comment>
            </>
        )
    }
}

export default Wan