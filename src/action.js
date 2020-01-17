import {SET_PRICE, SET_QUANTIY} from './constants';


export const setPrice = (msg, value) => dispatch => {
    dispatch({
        type: SET_PRICE,
        payload: {
            msg,
            value
        }
    });
}