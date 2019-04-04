import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import History from '../history';
import MainPage from './MainPage';
import LightningTalks from './LightningTalks';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router history={History}>
          <Fragment>
            <Route path="/" exact component={MainPage} />
            <Route path="/lightning-talks" exact component={LightningTalks} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}
