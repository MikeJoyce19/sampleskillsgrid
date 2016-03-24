import {createStore, applyMiddleware, compose} from 'redux';
import DevTools from '../../containers/DevTools'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

function configureStore(defaultValue = {}) {
    const enhancers = compose(applyMiddleware(thunk), DevTools.instrument());
    const store = createStore(rootReducer, defaultValue, enhancers)

    return store;
}

export default configureStore;