import {combineReducers} from 'redux';
import * as types from './constants';

function setPrice(state = 0, action) {
    switch(action.type) {
        case types.SET_PRICE:
            return action.value;
        default: 
            return state;
    }
}

function setQuantity(state = 1, action) {
    switch(action.type) {
        case types.SET_QUANTIY:
            return action.value;
        default:
            return state;
    }
}

function setTotal(state = 0, action) {
    switch(action.type) {
        case types.SET_TOTAL:
            return action.value;
        default:
            return state;
    }
}

const reducer = combineReducers({
    setPrice,
    setQuantity,
    setTotal
})

export default reducer