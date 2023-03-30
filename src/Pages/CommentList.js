import { Component } from "react";

class CommenList extends Component {

    state = {
        value: '',
        update: null
    }

    handleClick = i => e => {
        this.setState({
            ...this.state,
            value: e.target.innerHTML,
            update: i
        })
    }

    handleChange = e => {
        const { value } = { ...e.target }

        this.setState({
            ...this.state,
            value,
        })
    }

    updateKeyDown = k => e => {
        if (e.key !== 'Enter') return

        const { updateList, list } = this.props

        const newList = [...list]
        newList[k].content = this.state.value

        this.setState({
            ...this.state,
            update: null
        })

        updateList(newList)
    }

    deleteList = k => {
        const { updateList, list } = this.props
        const newList = [...list].filter ( (v,i) => i !== k)
        
        updateList(newList)
    }

    rendList = () => this.props.list.map((v, k) => {
        return (
            
            <ul className='comment-row' key={k}>
                <li className='comment-id'>{v.userid}</li>
                <li className='comment-content'>
                    {
                        this.state.update === k
                            ?
                            <input
                                type='text'
                                value={this.state.value}
                                onChange={this.handleChange}
                                onKeyDown={this.updateKeyDown(k)}
                                className='comment-update-input'
                            />
                            :
                            <>
                                <span onClick={this.handleClick(k)}>{v.content}</span>
                                <button className='comment-delete-btn' 
                                    onClick={() => {this.deleteList(k)}}
                                >
                                댓글 삭제
                                </button>
                            </>
                    }
                </li>
                <li className='comment-date'>{v.date}</li>
            </ul>
        )
    })

    render() {
        return (
            <li>
                {this.rendList()}
            </li>
        )
    }
}

export default CommenList