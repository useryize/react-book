import React, { Component, Fragment } from 'react'
import TodoItem from './TodeItem';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            listData: []
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render () {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.change}
                    />
                    <button
                        onClick={this.submit}
                    >提交</button>
                </div>
                <ul>
                    {this.TodoItemHtml()}
                </ul>
            </Fragment>
        )
    }
    componentWillMount () {
        console.log('componentWillMount:在组件挂在前调用，只会调用一次');
    }
    componentDidMount () {
        console.log('componentDidMount:');
    }
    TodoItemHtml () {
        return this.state.listData.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    itemData={item}
                    index={index}
                    deleteItem={this.deleteItem}
                />
            )
        })
    }
    change (e) {
        let value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }
    submit () {
        let { inputValue } = this.state;
        if (inputValue) {
            this.setState((val) => ({
                listData: [...val.listData, val.inputValue],
                inputValue: ''
            }));
        }
    }
    deleteItem (index) {
        let list = [...this.state.listData];
        list.splice(index, 1);

        this.setState(() => ({
            listData: list
        }));
    }
};
export default TodoList;