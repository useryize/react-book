const defaultState = {
    inputValue: '',
    listData: []
}

export default (state = defaultState, action) => {
    if (action.type === 'CHANGE') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'BUTTONCLICK') {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.listData = [...newState.listData, newState.inputValue];
            newState.inputValue = '';
            return newState;
        }
    }
    if (action.type === 'ITEMCLICK') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.listData.splice(action.index, 1)
        return newState;
    }
    return state;
}