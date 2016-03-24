import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

function configureStore(defaultValue = {}) {
    return createStore(rootReducer, defaultValue, applyMiddleware(thunk));
}

export default configureStore;