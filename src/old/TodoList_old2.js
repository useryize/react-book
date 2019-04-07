import React, { Component, Fragment } from 'react';
import { input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { change, submit, deleteItem} from './store/actioneDispatch';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState);
        });

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    render () {
        return (
            <Fragment>
                <div  style={{margin: '10px 0 0 10px'}}>
                    <input
                        style={{width: '300px'}}
                        placeholder='请输入'
                        value={this.state.inputValue}
                        onChange={this.change}
                    />
                    <Button
                        style={{width: '100px', marginLeft: '10px'}}
                        type='primary'
                        onClick={this.submit}
                    >提交</Button>
                </div>
                <List
                    style={{width: '300px', marginLeft: '10px'}}
                    bordered
                        dataSource={this.state.listDate}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={this.deleteItem.bind(this, index)}
                        >{item}</List.Item>
                    )}
                />
            </Fragment>
        )
    }
    // 输入框改变时触发
    change (e) {
        let action = change(e.target.value);
        store.dispatch(action);
    }
    submit () {
        let action = submit();
        store.dispatch(action);
    }
    deleteItem (index) {
        let action = deleteItem(index);
        store.dispatch(action);
    }
};
export default TodoList;