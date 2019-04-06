import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodeItem extends Component {
    constructor (props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render () {
        let { itemData } = this.props
        return (
            <div 
                onClick={this.deleteItem}
                dangerouslySetInnerHTML={{__html: itemData}}
            >
            </div>
        )
    }
    componentWillUnmount () {
        console.log('componentWillUnmount: 组件卸载前执行，可以执行componentDidMount中创建的domn避免内存泄漏')
    }
    deleteItem () {
        let { deleteItem, index } = this.props;
        deleteItem(index);
    }

}
TodeItem.propTypes = {
    itemData: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
TodeItem.defaultProps = {
    itemData: ''
}
export default TodeItem;