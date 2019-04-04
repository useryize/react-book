import React, { Component, Fragment } from 'react'
import TodoItem from './TodeItem';

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
                    <button
                        onClick={this.submit.bind(this)}
                    >提交</button>
                </div>
                <ul>
                    {
                        this.state.listData.map((item, index) => {
                            return (
                                <TodoItem key={index} itemData={item}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    change (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    submit () {
        if (this.state.inputValue) {
            this.setState({
                listData: [...this.state.listData, this.state.inputValue],
                inputValue: ''
            });
        }
    }
};
export default TodoList;