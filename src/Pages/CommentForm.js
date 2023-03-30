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
                    <input type='submit' className='btn' value='등록'/>
                </form>
            </li>
        )
    }
}
export default CommentForm