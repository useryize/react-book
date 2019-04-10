import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css'

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            buttonIcon: false
        }
    }
    render () {
        return (
            <Fragment>
                <div className='main'>
                    <ul className='box01'>
                        <li>
                            <p>button按钮</p>
                            <Button type='primary'>主按钮</Button>
                            <Button type='dashed'>次按钮</Button>
                            <Button type='danger'>次按钮</Button>
                            <Button type='primary' icon='search' disabled = {this.state.buttonIcon ? 'disabled' : ''}>主按钮</Button>
                        </li>
                    </ul>
                    
                </div>
            </Fragment>
        )
    }
    componentDidMount () {
    }
}

const mapStateToProps = (state) => {
    return {
        data: ''
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);