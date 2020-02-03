import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

