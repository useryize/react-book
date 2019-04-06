import { CHANGE, SUBMIT, DELETE } from './actionTypes'

export const change = (value) => ({
    type: CHANGE,
    inputValue: value
});

export const submit = () => ({
    type: SUBMIT
});

export const deleteItem = (index) => ({
    type: DELETE,
    index
});