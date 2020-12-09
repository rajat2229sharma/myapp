import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loadImageReducer from "./reducers/reducers";
import { watchLoadImage, watchLikeImage, watchDislikeImage, watcherFinishImage, watcherResetAllState } from '../sagas/saga.js';

const sagaMiddleware =createSagaMiddleware();
// const reducer = combineReducers({ image: loadImageReducer })

export const initialState = {
    totalLike: 0,
    totalDislike: 0,
    finish: false,
    image: {
        url: '',
        like: false,
        dislike: false,
    }
};

const store = createStore(
    loadImageReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleware.run(watchLoadImage);
sagaMiddleware.run(watchLikeImage);
sagaMiddleware.run(watchDislikeImage);
sagaMiddleware.run(watcherFinishImage);
sagaMiddleware.run(watcherResetAllState);

export default store;