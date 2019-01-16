import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import Items from 'pages/Items';
import CreateProject from 'pages/CreateProject';
import Settings from 'pages/Settings';
import Header from 'components/Header';


const Routes = () => (
  <Fragment>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/items" component={Items} />
    <Route path="/new-project" component={CreateProject} />
    <Route path="/settings" component={Settings} />
  </Fragment>
);

export default Routes;
