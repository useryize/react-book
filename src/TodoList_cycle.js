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
        console.log('render')
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
        console.log('componentWillMount: 组件挂载到DOM前调用，只会调用一次');
    }
    componentDidMount () {
        console.log('componentDidMount: 组件挂载到DOM后调用，只会调用一次');
    }
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate: props与state发生变法时执行，返回true时当前组件继续执行更新操作');
        return true;
    }
    componentWillUpdate () {
        console.log('componentWillUpdate: shouldComponentUpdate返回true时，在renter之前执行');
    }
    componentDidUpdate () {
        console.log('componentDidUpdate: shouldComponentUpdate返回true时, 在renter之后执行，可以操作更新后的DOM');
    }
    componentWillUnmount () {
        console.log('componentWillUnmount: 组件卸载前执行，可以执行componentDidMount中创建的domn避免内存泄漏')
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