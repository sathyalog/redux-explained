import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* to see redux dev-tool extension on browser window*/
);

export default store;