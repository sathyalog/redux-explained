import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from './constants';

//another example api - https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc
function* fetchProducts() {  
    const data = yield fetch('https://firebasestorage.googleapis.com/v0/b/buyforyou-a5fdc.appspot.com/o/products.json?alt=media&token=8a6d0757-478d-4f53-b73d-1245636f7468')
        .then(response => response.json() );      
    yield put({ type: types.PRODUCTS_RECEIVED, data: data });
}

function* actionWatcher() {
     yield takeLatest(types.GET_PRODUCTS, fetchProducts)
}

export default function* productSaga() {
    yield all([
        actionWatcher(),
    ]);
}