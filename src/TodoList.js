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
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.change.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>1</li>
                </ul>
            </Fragment>
        )
    }
    change (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
};
export default TodoList;