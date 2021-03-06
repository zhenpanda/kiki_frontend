import React from 'react';
import ReactDOM from 'react-dom';
// import { lazy, Suspense } from 'react';

import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

// CSS LIB
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/js/forms.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-transitions/dist/animations.css';

// import Landing from './containers/Landing';
import Register from './containers/Register';
import Intro from './containers/Intro';
import Market from './containers/Market';
import MyShirts from './containers/MyShirts';

// redux store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const history = createBrowserHistory();

const App = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        
        <Switch>
          
          <Route exact path='/' component={ Intro } />
          <Route path='/register'component={ Register } />
          <Route path='/market' component={ Market } />
          <Route path='/mydesign'component={ MyShirts } />

        </Switch>

      </Router>
    </Provider>
);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();