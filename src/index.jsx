import React from 'react';
import { render } from 'react-dom';
// import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'modules/store';
import 'assets/styles.global';
import 'assets/font-awesome';
import Routes from './routes';


const App = () => (
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>
);

// const HotApp = hot(module)(App);

render(<App />, document.getElementById('root'));
