import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from './constants';

//another example api - https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc
function* fetchProducts() {  
    const data = yield fetch('https://firebasestorage.googleapis.com/v0/b/redux-store-c6c24.appspot.com/o/products.json?alt=media&token=68c5e12f-1e53-4b5e-b6e8-350faefe3aa7')
        .then(response => response.json() );      
    yield put({ type: types.PRODUCTS_RECEIVED, data: data });
}

function* fetchArticles() {  
    const data = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json() );      
    yield put({ type: types.ARTICLES_RECEIVED, data: data.articles });
}

function* actionWatcher() {
     yield takeLatest(types.GET_PRODUCTS, fetchProducts);
     yield takeLatest(types.GET_ARTICLES, fetchArticles)
}

export default function* productSaga() {
    yield all([
        actionWatcher(),
    ]);
}