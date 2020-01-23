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

function getProducts(state={}, action) {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return { ...state, loading: true };
        case types.PRODUCTS_RECEIVED:
            return { ...state, products: action.data, loading: false }
        default:
            return state;
    }
}

function getArticles(state={}, action) {
    switch(action.type) {
        case types.GET_ARTICLES:
            return { ...state, loading: true };
        case types.ARTICLES_RECEIVED:
            return { ...state, articles: action.data, loading: false }
        default:
            return state;
    }
}

const reducer = combineReducers({
    setPrice,
    setQuantity,
    setTotal,
    getProducts,
    getArticles
})

export default reducer