import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import Items from 'pages/Items';
import Header from 'components/Header';


const Routes = () => (
  <Fragment>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/items" component={Items} />
  </Fragment>
);

export default Routes;
