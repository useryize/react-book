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