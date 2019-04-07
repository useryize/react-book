import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CHANGE, BUTTONCLICK, ITEMCLICK } from './store/actionTypes';


class App extends Component {
    render () {
        const { inputValue, change, listData, itemClick, buttonClick } = this.props;
        return (
            <Fragment>
                <div>
                    <input
                        value={inputValue}
                        onChange={change}
                    />
                    <button
                        onClick={buttonClick} 
                    >提交</button>
                </div>
                <ul>
                    {
                        listData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {itemClick(index)}}
                                >{item}</div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        listData: state.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change (e) {
            let action = {
                type: CHANGE,
                value: e.target.value
            }
            dispatch(action);
        },
        buttonClick () {
            let action = {
                type: BUTTONCLICK
            }
            dispatch(action);
        },
        itemClick (index) {
            let action = {
                type: ITEMCLICK,
                index
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);