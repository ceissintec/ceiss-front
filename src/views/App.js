import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import History from '../history';
import MainPage from './MainPage';
import LightningTalks from './LightningTalks';
import Footer from '../components/Footer';
import PageShell from '../components/PageShell';

export default class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Fragment>
          <Route path="/" exact component={PageShell(MainPage)} />
          <Route
            path="/lightning-talks"
            exact
            component={PageShell(LightningTalks)}
          />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
