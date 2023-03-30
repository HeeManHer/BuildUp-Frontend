import { Component } from "react";

class Comment extends Component {

    render() {
        return(
            <ul className="comment">
                {this.props.children}
            </ul>
        )
    }
}

export default Comment