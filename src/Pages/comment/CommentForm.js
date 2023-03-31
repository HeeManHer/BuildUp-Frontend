import { Component } from 'react'

class CommentForm extends Component {

    state = {
        value: ''
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ 
            value, 
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addList(this.state.value)
        this.setState({
            value: ''
    })
}

    render() {
        return(
            <li className='comment-form'>
                <form onSubmit={this.handleSubmit}> 
                    <span className='ps_box'>
                        <input  
                        type='text' 
                        className='int' 
                        placeholder='댓글을 입력해주세요.' 
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                    </span>

                    <button type='submit' className="btn btn-success btn-icon-split btn-sm">
                            <span className="icon text-white-50">
                                <i className="fas fa-check"></i>
                            </span>
                            <span className="text">등록</span>
                    </button>
                </form>
            </li>
        )
    }
}
export default CommentForm