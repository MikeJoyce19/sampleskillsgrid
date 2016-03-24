import React, {Component} from 'react'
import {Provider} from 'react-redux'
import LoginForm from './components/LoginForm'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Main from './containers/Main'
import Dashboard from './containers/Dashboard'
import {getUserFromStorage, setLoggedInUser}from './service/storage';
import Assessment from './components/Assessment'
import MyAssessmentTile from'./containers/MyAssessmentsTile'
import configureStore from './redux/store/configureStore';
import DevTools from './containers/DevTools'

var userInfo = getUserFromStorage();

let componentToRender;
if (!userInfo) {
    const users = [
        {id: 1, username: 'Jason Tieszen', role: 'evaluator', imageUrl: 'http://i.imgur.com/96H7Qeb.png'},
        {id: 2, username: 'Jason Erdahl', role: 'assessor', imageUrl: 'http://i.imgur.com/VgAy2KP.png'},
        {id: 3, username: 'Jonathan "JOMAN" Oman"', role: 'candidate', imageUrl: 'http://i.imgur.com/yBB4NaM.png'}
    ];

    const loginAction = (user) => {
        setLoggedInUser(user);
        location.reload(true);
    }

    componentToRender = <LoginForm login={loginAction} users={users}></LoginForm>
} else {
    const defaultState = {user: userInfo};
    const store = configureStore(defaultState);
    const history = syncHistoryWithStore(browserHistory, store);

    //TODO there are better ways to do this... - https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
    const devTools = process.env.NODE_ENV !== 'production' ? <DevTools /> : ('');

    componentToRender = <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Dashboard}/>
                    <Route path="assessments" component={MyAssessmentTile}/>
                    <Route path="assessments/:id" component={Assessment}/>
                </Route>
            </Router>
            {devTools}
        </div>

    </Provider>
}


class App extends Component {
    render() {
        return (componentToRender)
    }
}

export default App;
