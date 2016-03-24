import user from './login';
import myAssessments from './myAssessments'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    user,
    myAssessments,
    routing: routerReducer
});
