import React, { Component, Fragment } from 'react'

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '输入..',
            listData: []
        }
    }
    render () {
        return (
            <Fragment>
                <div><input value={this.state.inputValue}/><button>提交</button></div>
                <ul>
                    <li>1</li>
                </ul>
            </Fragment>
        )
    };
};
export default TodoList;