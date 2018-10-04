import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// import { Provider } from 'react-redux';


const App = () => (
  <Router>
    {/* <Provider> */}
    <Routes />
    {/* </Provider> */}
  </Router>
);

const HotApp = hot(module)(App);

render(<HotApp />, document.getElementById('root'));
