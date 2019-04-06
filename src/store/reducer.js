const defaultState = {
    inputValue: '',
    listDate: []
};

export default (state = defaultState, action) => {
    if (action.type === 'CHANGE') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if (action.type === 'SUBMIT') {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.listDate = [...newState.listDate, newState.inputValue]
            newState.inputValue = '';
            return newState;
        }
    }
    if (action.type === 'DELETE') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.listDate.splice(action.index, 1);
        return newState;
    }
    return state
}