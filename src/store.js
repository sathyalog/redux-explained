import {createStore,compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import productSaga from './productSagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(productSaga);

export default store;