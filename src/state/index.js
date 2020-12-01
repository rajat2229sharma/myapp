import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loadImageReducer from "./reducers/reducers";
import { watchAgeUp } from '../sagas/saga.js';

const sagaMiddleware =createSagaMiddleware();
const reducer = combineReducers({ image: loadImageReducer })

export const initialState = {
    image: {
        url: ''
    }
};

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
)
sagaMiddleware.run(watchAgeUp);

export default store;