import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';


const Routes = () => (
  <Fragment>
    <Route path="/" component={Home} />
  </Fragment>
);

export default Routes;
