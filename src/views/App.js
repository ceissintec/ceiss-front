import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Router, Route } from 'react-router-dom';
import History from '../history';
import MainPage from './MainPage';
import Footer from '../components/Footer';
const LightningTalks = lazy(() => import('./LightningTalks'));

function LoadableTalks() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LightningTalks />
    </Suspense>
  );
}

export default class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Fragment>
          {/* <NavBar /> */}
          <Route path="/" exact component={MainPage} />
          <Route path="/lightning-talks" exact component={LoadableTalks} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
