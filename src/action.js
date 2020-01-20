import * as types from './constants';


export const setPrice = (value) => {
    return {
        type: types.SET_PRICE,
        value 
    }
}

export const setQuantity = (value) => {
    return {
        type: types.SET_QUANTIY,
        value 
    }
}

export const setTotal = (value) => {
    return {
        type: types.SET_TOTAL,
        value 
    }
}